var express = require('express');
var router = express.Router();
var blogsController = require('../controllers/blogs.controller');
var authenticator = require('../modules/authenticator.module');

module.exports =  function () {
  // create blogs controller
  var controller = blogsController();

  // lists all blogs
  router.get('/', controller.getAll);

  // creates new blog
  router.post('/', authenticator.isUserAuthenticated, controller.create);

  return router;
};  