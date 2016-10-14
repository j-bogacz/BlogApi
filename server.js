process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_PORT = process.env.APP_PORT || 3000;

var db = require('./config/db');
db.initialize();

var express = require('./config/express');
var app = express();

app.listen(process.env.APP_PORT);

console.log('Server running at http://localhost:' + process.env.APP_PORT + '/');
