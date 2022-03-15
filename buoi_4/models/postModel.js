const mongoose = require('mongoose');
const User = require('./userModel');
const postSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Course = mongoose.model('Post', postSchema);

module.exports = Course;
