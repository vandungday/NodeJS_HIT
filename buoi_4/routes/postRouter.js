const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.get);
router.get('/:id', postController.getID);
router.post('/', postController.post);
router.put('/:id', postController.put);
router.delete('/:id', postController.deletePost);

module.exports = router;
