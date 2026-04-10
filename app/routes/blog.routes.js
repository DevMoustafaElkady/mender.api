const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller")

router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getPostById)
router.post("/", blogController.addPost)
router.delete("/:id", blogController.deletePost)
router.patch("/:id", blogController.updatePost)

module.exports = router
