const express = require('express');
const router = express.Router();
const authMiddleware = require('../middelwares/authMiddleware');
const userController = require('../controllers/userController');

router.get('/user', authMiddleware.authorization, userController.get);
router.get('/user/:id', userController.getID);
router.get('/userAge/', authMiddleware.authorization, userController.getAge);
router.get(
    '/userNameBeginWithH/',
    authMiddleware.authorization,
    userController.getName
);
router.post('/user', userController.post);
router.put('/user/:id', userController.put);
router.delete(
    '/user/:id',
    authMiddleware.authorization,
    userController.deleteUser
);

module.exports = router;
