const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const filesController = require('../controllers/filesController');

router
  .route('/')
  .get(filesController.filesReader)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'SuperAdmin'),
    filesController.getStats
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'SuperAdmin'),
    filesController.deleteFile
  );

router.route('/:id').get(filesController.downloadFile);
router.route('/get/all').get(filesController.getSizeImageFolder);

module.exports = router;
