// Load required packages
var Blog = require('../models/blog');

var controller = function () {
    // lists all blogs
    var getBlogs = function (req, res) {
        // use the Blog model to find all blogs
        Blog.find(function (err, blogs) {
            if (err) {
                res.status(400).json({ status: 'Exception', message: `Exception getting blogs ${req.params.blog_id}`, exception: err });
                return;
            }

            res.status(200).json({ status: 'Success', message: `All blogs have been successfully retrieved`, data: blogs });
        });
    };

    // lists single blog
    var getBlog = function (req, res) {
        // use the Blog model to find a specific blog
        Blog.findById(req.params.blog_id, function (err, blog) {
            if (err) {
                res.status(400).json({ status: 'Exception', message: `Exception getting blog ${req.params.blog_id}`, exception: err });
                return;
            }

            if (!blog) {
                res.status(404).json({ status: 'Error', message: `Blog retrieval failed, blog ${req.params.blog_id} not found`, data: null });
                return;
            }

            res.status(200).json({ status: 'Success', message: `Blog ${req.params.blog_id} has been successfully retrieved`, data: blog });
        });

    }

    // creates new blog
    var createBlog = function (req, res) {
        // create a new instance of the Blog model
        var blog = new Blog();

        // set the blog properties that came from the POST data
        blog.name = req.body.name;
        blog.description = req.body.description;

        // save the blog and check for Exceptions
        blog.save(function (err) {
            if (err) {
                res.status(400).json({ status: 'Exception', message: `Exception creating blog ${req.params.blog_id}`, exception: err });
                return;
            }

            res.status(200).json({ status: 'Success', message: `Blog ${req.params.blog_id} has been successfully created`, data: blog });
        });
    }

    // updates blog
    var updateBlog = function (req, res) {
        // use the Blog model to find a specific blog
        Blog.findById(req.params.blog_id, function (err, blog) {
            if (err) {
                res.status(400).json({ status: 'Exception', message: `Exception updating blog ${req.params.blog_id}`, exception: err });
                return;
            }

            if (!blog) {
                res.status(404).json({ status: 'Error', message: `Blog update failed, blog ${req.params.blog_id} not found`, data: null });
                return;
            }

            // update blog's data
            if (req.body.name) {
                blog.name = req.body.name;
            }
            if (req.body.description) {
                blog.description = req.body.description;
            }

            // save the blog and check for Exceptions
            blog.save(function (err) {
                if (err) {
                    res.status(400).json({ status: 'Exception', message: `Exception updating blog ${req.params.blog_id}`, exception: err });
                    return;
                }

                res.status(200).json({ status: 'Success', message: `Blog ${req.params.blog_id} has been successfully updated`, data: blog });
            });
        });
    }

    // deletes blog
    var deleteBlog = function (req, res) {
        // use the Blog model to find a specific blog and remove it
        Blog.findByIdAndRemove(req.params.blog_id, function (err, blog) {
            if (err) {
                res.status(400).json({ status: 'Exception', message: `Exception deleting blog ${req.params.blog_id}`, exception: err });
                return;
            }

            if (!blog) {
                res.status(404).json({ status: 'Error', message: `Blog deletion failed, blog ${req.params.blog_id} not found`, data: null });
                return;
            }

            res.status(200).json({ status: 'Success', message: `Blog ${req.params.blog_id} has been successfully deleted` });
        });
    }

    return {
        'getAll': getBlogs,
        'get': getBlog,
        'create': createBlog,
        'update': updateBlog,
        'delete': deleteBlog
    };
};

module.exports = controller;  