var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts.server.controller');
var authenticator = require('../modules/authenticator.server.module');

module.exports = function (app) {

  // lists all posts
  router.get('/', postsController.getAll);

  // creates new posts
  router.post('/', authenticator.isUserAuthenticated, postsController.create);

  return router;
};  