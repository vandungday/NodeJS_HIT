const express = require('express');
const router = express.Router();
const authController = require('../controllers/authorController');

router.post('/login', authController.login);
router
    .route('/forget-password')
    .get(authController.changePassword)
    .post(authController.forgetPassword);
module.exports = router;
