var express = require('express');
var router = express.Router();
var blogsController = require('../controllers/blogs.server.controller');
var authenticator = require('../modules/authenticator.server.module');

module.exports = function (app) {

  // lists all blogs
  router.get('/', blogsController.getAll);

  // creates new blog
  router.post('/', authenticator.isUserAuthenticated, blogsController.create);

  return router;
};  