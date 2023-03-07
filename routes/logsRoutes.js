const express = require('express');
const router = express.Router();
const logsController = require('../controllers/logsController');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(logsController.readFileAsync)
  .put(
    authController.protect,
    authController.restrictTo('admin', 'SuperAdmin'),
    logsController.claerFileAsync
  );

module.exports = router;
