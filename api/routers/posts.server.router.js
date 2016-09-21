var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts.server.controller');

module.exports = function (app) {

  // lists all posts
  router.get('/', postsController.getAll);

  // creates new posts
  router.post('/', postsController.create);

  return router;
};  