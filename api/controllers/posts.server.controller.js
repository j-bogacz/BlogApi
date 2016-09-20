var controller = (function () {

    // lists all posts
    var getAll = function (req, res) {
        var posts = [
            { title: "First post", content: "Hi this is my first post. At this stage of the project it is hardcoded." },
            { title: "Second post", content: "Second post is also hardcoded." }
            ];
        res.json(posts);
    };

    return {
        'getAll': getAll
    };
} ());

module.exports = controller;  