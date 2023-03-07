const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'SuperAdmin'),
    userController.getAll
  )
  .post(userController.create);
router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'SuperAdmin'),
    userController.getOne
  )
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'SuperAdmin'),
    userController.update
  )
  .delete(
    authController.protect,
    authController.restrictTo('SuperAdmin'),
    userController.delete
  );
module.exports = router;
