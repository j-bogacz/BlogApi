var mongoose = require('mongoose');

// TODO: Put connection string in some configuration
var connectionString = 'mongodb://cloudservers-jbogacz.cloudapp.net:27017/BlogsWebApi';

var db = function () {
    // initialaze database
    var initialize = function () {
        mongoose.connect(connectionString);
    }

    return {
        'initialize': initialize
    };
} ();

module.exports = db;  