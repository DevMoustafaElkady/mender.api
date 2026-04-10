const Blog = require("../models/blog.model");

// Get All Blogs
exports.getAllBlogs = () => {
  return Blog.find();
};

// Get Post By ID
exports.getPostById = (id) => {
   return Blog.findById(id) 
}

// Add New Post
exports.addPost = (blogData) => {
  const newBlog = new Blog(blogData);
  return newBlog.save();
};

// Delete Post
exports.deletePost = (id) => {
    return Blog.findByIdAndDelete(id)
}

// Update Post
exports.updatePost = (id, blogData) => {
    return Blog.findByIdAndUpdate(id, blogData, {new: true})
}

