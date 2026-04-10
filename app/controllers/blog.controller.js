const blogService = require("../services/blog.service");
const blogSchemaValidator = require("../validators/blog.validators");

// Get All Posts
exports.getAllBlogs = (req, res) => {
  blogService
    .getAllBlogs()
    .then((blog) => {
      res.status(200).json({ data: blog });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "error when get the Blog list", error: error });
    });
};

// Get Post By ID
exports.getPostById = (req, res) => {
  blogService
    .getPostById(req.params.id)
    .then((postData) => {
      console.log("rrrrrrrrr posttttt.....", postData);
      res
        .status(200)
        .json({ message: "post retrieved succefully", data: postData });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "error while retrieving post data", error: err });
    });
};

// Add New Post
exports.addPost = (req, res) => {
  console.log("booooooooody req......", req.body);
  const error = blogSchemaValidator.validate(req.body).error;
  if (error) {
    res
      .status(400)
      .json({ message: "error while adding the blog", error: error });
  }
  blogService
    .addPost(req.body)
    .then((post) => {
      res.status(200).json({ message: "post Added Successfully", data: post });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "error while adding post 500", error: err });
    });
};

// Delete Post
exports.deletePost = (req, res) => {
  blogService
    .deletePost(req.params.id)
    .then((deletedPlace) => {
      if (deletedPlace) {
        res.status(200).json({ message: "post deleted!" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error while delete post", error: err });
    });
};

// Update Post
exports.updatePost = (req, res) => {
  const error = blogSchemaValidator.validate(req.body).error;
  if (error) {
    res.status(400).json({ message: "error in Update", error: error });
  }

  blogService
    .updatePost(req.params.id, req.body)
    .then((postData) => {
      res
        .status(200)
        .json({ message: "post updated Succesfully", data: postData });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "error whike updating the post", error: err });
    });
};
