const User = require('../models/userModel');
const asynchandle = require('../utils/asyncHandle');

const get = asynchandle(async (req, res) => {
    const user = await User.find();
    res.json(user);
});

const getID = asynchandle(async (req, res) => {
    let { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
});

const getAge = asynchandle(async (req, res) => {
    const users = await User.find({
        age: { $gt: 18, $lte: 40 },
    });
    res.json(users);
});

const getName = asynchandle(async (req, res) => {
    const users = await User.find({ name: /^h/ });
    res.json(users);
});
const post = asynchandle(async (req, res) => {
    let user = await User.create(req.body);
    res.json(user);
});

const put = asynchandle(async (req, res) => {
    let id = req.params.id;
    const userUpdate = await User.findByIdAndUpdate(id, req.body);
    res.json(userUpdate);
});
const deleteUser = asynchandle(async (req, res) => {
    let { id } = req.params;
    const userDelete = await User.findByIdAndDelete(id);
    res.json({
        status: 'success',
        data: userDelete,
    });
});
module.exports = {
    get,
    getID,
    getAge,
    getName,
    post,
    put,
    deleteUser,
};
