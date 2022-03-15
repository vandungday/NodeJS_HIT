const Post = require('../models/postModel');
const asynchandle = require('../utils/asyncHandle');
// class PostController {
const get = asynchandle(async (req, res) => {
    res.json(await Post.find());
});

const getID = asynchandle(async (req, res) => {
    res.json(await Post.findById(id));
});

const post = asynchandle(async (req, res) => {
    let user = await Post.create(req.body);
    res.json(user);
});

const put = asynchandle(async (req, res) => {
    let { id } = req.params;
    res.json(await Post.findByIdAndUpdate(id, req.body));
});

const deletePost = asynchandle(async (req, res) => {
    let { id } = req.params;
    const postDelete = await Post.findByIdAndDelete(id);
    res.json(postDelete);
});
// }

module.exports = {
    get,
    getID,
    post,
    put,
    deletePost,
};
