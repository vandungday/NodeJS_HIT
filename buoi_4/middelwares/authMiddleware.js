const User = require('../models/userModel');
const asynchandle = require('../utils/asyncHandle');
const jwt = require('jsonwebtoken');
module.exports.authorization = asynchandle(async (req, res, next) => {
    let { id } = req.query;

    let user = await User.findById(id);

    if (!user) {
        return res.send('User not exist');
    }

    if (user.role !== 'admin') {
        return res.send('User not admin');
    }
    next();
});

module.exports.authentication = asynchandle(async (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer ')
    ) {
        const token = req.headers.authorization.split('Bearer ')[1];
        console.log(jwt.verify(token, 'vandungday'));
        next();
    } else {
        return res.send('Không có token');
    }
});
