const User = require('../models/userModel');
const asynchandle = require('../utils/asyncHandle');
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
