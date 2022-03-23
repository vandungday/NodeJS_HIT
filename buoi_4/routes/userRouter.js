const express = require('express');
const router = express.Router();
const authMiddleware = require('../middelwares/authMiddleware');
const userController = require('../controllers/userController');

router.get('/', userController.get);
router.get('/:id', userController.getID);
router.get('/userAge/', authMiddleware.authorization, userController.getAge);
router.get(
    '/userNameBeginWithH/',
    authMiddleware.authorization,
    userController.getName
);
router.post('/', userController.post);
router.put('/:id', userController.put);
router.delete('/:id', userController.deleteUser);

module.exports = router;
