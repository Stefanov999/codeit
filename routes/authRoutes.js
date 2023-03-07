const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.route('/').post(authController.signUp);
router.route('/login').post(authController.login);
router.route('/who').get(authController.jwtCheck);
router.route('/logout').get(authController.logOut);
module.exports = router;
