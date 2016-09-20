var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');

module.exports = function () {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compression());
    }

    return app;
};