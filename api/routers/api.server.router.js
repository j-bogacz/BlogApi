var express = require('express');
var router = express.Router();
var blogsRouter = require('../routers/blogs.server.router');

module.exports = function (app) {

  // router for /blogs
  router.use("/blogs", blogsRouter(app));

  return router;
};  