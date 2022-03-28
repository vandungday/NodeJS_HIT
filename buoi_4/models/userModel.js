const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./postModel');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new Schema({
    username: String,
    age: Number,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    reset_password_token: String,
    reset_password_expire: Date,
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

userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(15).toString('hex');

    console.log(this);
    this.reset_password_token = crypto
        .createHash('sha256', process.env.RESET_TOKEN_SECRET)
        .update(resetToken)
        .digest('hex');

    this.reset_password_expire =
        Date.now() + process.env.RESET_TOKEN_EXPIRE * 60 * 1000;

    return this.reset_password_token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
