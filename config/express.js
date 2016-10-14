var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var apiRouter = require('../api/routers/api.router');

var fallbackHandler = function () {
	var handler = function (req, res) {
		res.json({ "message": "Blogs WebAPI by j-bogacz" });
	};

	return handler;
}

module.exports = function () {
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	}
	else if (process.env.NODE_ENV === 'production') {
		app.use(compression());
	}

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(methodOverride());

	app.use('/api', apiRouter());
	app.use('/*', fallbackHandler());

	return app;
};