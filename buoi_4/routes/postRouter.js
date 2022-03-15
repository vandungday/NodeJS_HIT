const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/post', postController.get);
router.get('/post/:id', postController.getID);
router.post('/post', postController.post);
router.put('/post/:id', postController.put);
router.delete('/post/:id', postController.deletePost);

module.exports = router;
