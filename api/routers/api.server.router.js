var express = require('express');
var router = express.Router();
var postsRouter = require('../routers/posts.server.router');

module.exports = function (app) {

  // router for /post
  router.use("/posts", postsRouter(app));

  return router;
};  