const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router
    .route('/')
    .post(userController.register)
    .get(userController.sign_in)
module.exports = router;