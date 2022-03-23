const express = require('express');
const router = express.Router();
const codeController = require('../controllers/codeController');
const authMiddleware = require('../middelwares/authMiddleware');

router.post('/encode', authMiddleware.authentication, codeController.encode);
router.post('/decode', authMiddleware.authentication, codeController.decode);

module.exports = router;
