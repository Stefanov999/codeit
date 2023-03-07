const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const multerFile = require('../utils/multer');

router
  .route('/')
  .post(
    authController.protect,
    authController.restrictTo('admin', 'SuperAdmin'),
    multerFile.multerUploadOneGb,
    multerFile.sharpWebpNoFormat
  );

module.exports = router;
