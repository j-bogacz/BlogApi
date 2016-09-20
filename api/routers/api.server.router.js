var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts.server.controller');

module.exports = function (app) {

  // lists all posts
  router.get('/posts/', postsController.getAll);

  return router;
};  