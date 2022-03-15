const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./postModel');
const userSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    role: String,
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
