
const user = require('../database/user');
const User = require('../models/userModel');
class UserController {

    async get(req, res) {
        const user = await User.find();
        res.json(user);
    }

    async getID(req, res) {
        let { id } = req.params;
        const user = await User.findById(id);
        res.json(user);
    }

    async post(req, res) {
        let user = await User.create(req.body);
        res.json(user);
    }

    async put(req, res) {
        let id = req.params.id;
        const userUpdate = await User.findByIdAndUpdate(id, req.body);
        res.json(userUpdate);
    }

    async delete(req, res) {
        let { id } = req.params;
        const userDelete = await User.findByIdAndDelete(id)
        res.json(null);

    }
};

module.exports = new UserController;