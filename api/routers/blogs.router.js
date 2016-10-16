// Load required packages
var express = require('express');
var router = express.Router();
var blogsController = require('../controllers/blogs.controller');
var authenticator = require('../modules/authenticator.module');

module.exports = function () {
  // create blogs controller
  var controller = blogsController();

  // lists all blogs
  router.get('/', controller.getAll);

  // lists single blog
  router.get('/:blog_id', controller.get);

  // creates new blog
  router.post('/', authenticator.isUserAuthenticated, controller.create);

  // updates blog
  router.put('/:blog_id', authenticator.isUserAuthenticated, controller.update);

  // deletes blog
  router.delete('/:blog_id', authenticator.isUserAuthenticated, controller.delete);

  return router;
};  