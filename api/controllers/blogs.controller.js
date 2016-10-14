// Load required packages
var Blog = require('../models/blog');

var controller = function () {
    // lists all blogs
    var getAll = function (req, res) {
        // use the Blog model to find all blogs
        Blog.find(function (err, blogs) {
            if (err) {
                res.send(err);
            }

            res.json(blogs);
        });
    };

    // lists single blog
    var get = function (req, res) {
        // use the Blog model to find a specific blog
        Blog.findById(req.params.blog_id, function (err, blog) {
            if (err) {
                res.send(err);
            }

            res.json(blog);
        });

    }

    // creates new blog
    var create = function (req, res) {
        // create a new instance of the Blog model
        var blog = new Blog();

        // set the blog properties that came from the POST data
        blog.name = req.body.name;
        blog.description = req.body.description;

        // save the blog and check for errors
        blog.save(function (err) {
            if (err) {
                res.send(err);
            }

            res.json(blog);
        });
    }

    // updates blog
    var update = function (req, res) {
        // use the Blog model to find a specific blog
        Blog.findById(req.params.blog_id, function (err, blog) {
            if (err) {
                res.send(err);
            }

            // update blog's data
            if (req.body.name) {
                blog.name = req.body.name;
            }
            if (req.body.description) {
                blog.description = req.body.description;
            }

            // save the blog and check for errors
            blog.save(function (err) {
                if (err) {
                    res.send(err);
                }

                res.json(blog);
            });
        });
    }

    return {
        'getAll': getAll,
        'get': get,
        'create': create,
        'update': update
    };
};

module.exports = controller;  