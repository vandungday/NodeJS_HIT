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
