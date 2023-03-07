const pool = require('../db');
const catchAsync = require('./../utils/catchAsync');

/// GET All
exports.getAll = catchAsync(async (req, res, next) => {
  pool.query('SELECT * FROM public.user', (error, result) => {
    if (error) {
      res.end();
      return;
    } else {
      res.status(200).json(result.rows);
    }
  });
});
/// GET BY ID
exports.getOne = catchAsync(async (req, res, next) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM students WHERE id= $1', [id], (error, result) => {
    if (error) {
      res.end();
      return;
    } else {
      res.status(200).json(result.rows);
    }
  });
});

/// POST

exports.create = catchAsync(async (req, res, next) => {
  const { name, email, age, dob } = req.body;
  //check if email exists
  pool.query(
    'SELECT s FROM students s WHERE s.email = $1',
    [email],
    (error, result) => {
      if (result.rows.length) {
        res.status(200).json({
          status: 'email already exists'
        });
        return;
      }

      pool.query(
        'INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)',
        [name, email, age, dob],
        (error, result) => {
          res.status(201).json({
            status: 'success'
          });
        }
      );
    }
  );
});

exports.delete = catchAsync(async (req, res, next) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM students WHERE id= $1', [id], (error, result) => {
    if (error) {
      res.end();
      return;
    }

    const noResult = !result.rows.length;
    if (noResult) {
      res.status(200).json({
        status: 'no such student'
      });
      return;
    }

    pool.query('DELETE FROM students WHERE id= $1', [id], (error, result) => {
      res.status(200).json({
        status: 'student deleted'
      });
    });
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query('SELECT * FROM students WHERE id= $1', [id], (err, result) => {
    const noResult = !result.rows.length;
    if (noResult) {
      result.status(200).json({
        status: 'no such user'
      });
      return;
    }
  });
  pool.query(
    'UPDATE students SET name = $1 WHERE id = $2',
    [name, id],
    (error, result) => {
      res.status(200).json({
        status: 'studnet updated'
      });
    }
  );
});
