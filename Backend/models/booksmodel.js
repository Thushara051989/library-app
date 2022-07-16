const mongoose = require('mongoose');

var Book = mongoose.model('Book', {
    title: { type: String },
    author: { type: String },
    about: { type: String },
    
});

module.exports = { Book };