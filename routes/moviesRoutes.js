const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const authController = require('../controllers/authController');
const multerFile = require('../utils/multer');

router
  .route('/')
  .get(moviesController.getAll)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'SuperAdmin'),
    multerFile.multerUpload,
    multerFile.sharpWebp,
    moviesController.create
  );

router
  .route('/:id')
  .get(moviesController.getOne)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'SuperAdmin'),
    multerFile.multerUpload,
    multerFile.sharpWebp,
    moviesController.update
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'SuperAdmin'),
    moviesController.delete
  );

module.exports = router;
