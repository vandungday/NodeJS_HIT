const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandle = require('../utils/asyncHandle');

module.exports.login = asyncHandle(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        return res.send('Người dùng không tồn tại');
    }

    if (!(await user.isPasswordMatch(password))) {
        return res.send('Tài khoản hoặc mật khẩu sai');
    }

    const token = jwt.sign({ username }, 'vandungday', { expiresIn: '30m' });

    res.status(200).json({ token });
});

module.exports.forgetPassword = asyncHandle(async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.send('Email bắt buộc');
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.send('Người dùng không tồn tại');
    }

    let code = await user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });
    res.status(200).json({
        url: `${process.env.HOST}/forget-password?code=${code}`,
    });
});

module.exports.changePassword = asyncHandle(async (req, res, next) => {
    const { code } = req.query;
    const { newpassword } = req.body;

    if (!newpassword) {
        return res.status(401).send('Vui lòng nhập mật khẩu mới');
    }

    const user = await User.findOne({
        reset_password_token: code,
        reset_password_expire: { $gte: Date.now() },
    });

    if (!user) {
        return res.send('Tài khoản hoặc mật khẩu không đúng');
    }

    user.password = newpassword;
    await user.save();
    return res.send('Đổi mật khẩu thành công');

    next();
});
