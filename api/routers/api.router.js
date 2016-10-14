// Load required packages
var express = require('express');
var router = express.Router();
var blogsRouter = require('../routers/blogs.router');

module.exports = function () {
  // router for /blogs
  router.use("/blogs", blogsRouter());

  return router;
};  