
const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
router.get('/user', userController.get);
router.get('/user/:id', userController.getID);
router.post('/user', userController.post);
router.put('/user/:id', userController.put);
router.delete('/user/:id', userController.delete);

module.exports = router;
