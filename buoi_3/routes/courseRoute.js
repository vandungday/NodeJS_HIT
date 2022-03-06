
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/course', courseController.get);
router.get('/course/:id', courseController.getID);
router.post('/course', courseController.post);
router.post('/course', courseController.post);
router.put('/course/:id', courseController.put);
router.delete('/course/:id', courseController.delete);

module.exports = router;

