var controller = function () {

    // in-memory collection of posts
    var posts = [
        { title: "First post", content: "Hi this is my first post. At this stage of the project it is hardcoded." },
        { title: "Second post", content: "Second post is also hardcoded." }
    ];

    // lists all posts
    var getAll = function (req, res) {
        res.json(posts);
    };

    // creates new posts
    var create = function (req, res){
        var newPost = req.body;
        posts.push(newPost);
        res.json(newPost);
    }

    return {
        'getAll': getAll,
        'create': create
    };
} ();

module.exports = controller;  