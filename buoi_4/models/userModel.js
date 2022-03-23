const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./postModel');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: String,
    age: Number,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
});

userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 15);
    }
    next();
});

userSchema.methods.isPasswordMatch = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
