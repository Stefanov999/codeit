const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

router
  .route('/')
  .get(studentsController.getAll)
  .post(studentsController.create);
router
  .route('/:id')
  .get(studentsController.getOne)
  .patch(studentsController.update)
  .delete(studentsController.delete);
module.exports = router;
