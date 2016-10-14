// Load required packages
var mongoose = require('mongoose');

// Define blog schema
var BlogSchema = new mongoose.Schema({
    name: String,
    description: String
});

// Export the Mongoose model
module.exports = mongoose.model('Blog', BlogSchema);