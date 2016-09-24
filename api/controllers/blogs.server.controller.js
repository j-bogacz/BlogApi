var controller = function () {

    // in-memory collection of blogs
    var blogs = [
        { name: "First blog", description: "Hi this is my first blog. At this stage of the project it is hardcoded." },
        { name: "Second blog", description: "Second blog is also hardcoded." }
    ];

    // lists all blogs
    var getAll = function (req, res) {
        res.json(blogs);
    };

    // creates new blog
    var create = function (req, res){
        var newBlog = req.body;
        blogs.push(newBlog);
        res.json(newBlog);
    }

    return {
        'getAll': getAll,
        'create': create
    };
} ();

module.exports = controller;  