const pool = require('../db');
const catchAsync = require('./../utils/catchAsync');
const fs = require('fs');
const logsController = require('../controllers/logsController');
/// GET All
exports.getAll = catchAsync(async (req, res, next) => {
  pool.query('SELECT * FROM public.movies', (error, result) => {
    if (error) {
      res.end();
      return;
    } else {
      res.status(200).json(result.rows);
    }
  });
});
/// GET one by Id
exports.getOne = catchAsync(async (req, res, next) => {
  const id = parseInt(req.params.id);
  pool.query(
    'SELECT * FROM public.movies WHERE id= $1',
    [id],
    (error, result) => {
      if (error) {
        res.end();
        return;
      } else {
        res.status(200).json(result.rows);
      }
    }
  );
});
/// POST

exports.create = catchAsync(async (req, res, next) => {
  const { title, author, img, article } = req.body;
  var today = new Date();
  var time = today.toLocaleDateString();
  let image = 'noImg';
  if (req.file) {
    image = req.file.filename;
  }

  pool.query(
    'INSERT INTO public.movies (title, author, img, article,time) VALUES ($1,$2,$3,$4,$5)',
    [title, author, image, article, time],
    (error, result) => {
      res.status(201).json({
        status: 'success'
      });
    }
  );
  logsController.writeFileLog(`Uploaded : ${req.file.filename}`);
});

/// Patch
exports.update = catchAsync(async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { title, author, article } = req.body;
  let today = new Date();
  let time = today.toLocaleDateString();

  pool.query(
    'SELECT * FROM public.movies WHERE id= $1',
    [id],
    (err, result) => {
      if (req.file) {
        fs.unlink(`./images/${result.rows[0].img}`, function(err) {
          if (err) {
            /// Delete old image if new one is provided .
            /// This if here is for testing only
            console.log('Error with image old img delete - movies');
          }
        });
      }
      const noResult = !result.rows.length;
      if (noResult) {
        result.status(200).json({
          status: 'no such item'
        });
        return;
      }
    }
  );

  if (req.file) {
    pool.query(
      'UPDATE public.movies SET title = $2,author = $3, img = $4, article = $5, time = $6 WHERE id = $1',
      [id, title, author, req.file.filename, article, time],
      (error, result) => {
        res.status(200).json({
          status: 'success'
        });
      }
    );
    logsController.writeFileLog(`Updated : 'Image to ${req.file.filename}`);
  } else {
    pool.query(
      'UPDATE public.movies SET title = $2,author = $3,article = $4, time = $5 WHERE id = $1',
      [id, title, author, article, time],
      (error, result) => {
        res.status(200).json({
          status: 'success'
        });
      }
    );
  }
});

/// Delete
exports.delete = catchAsync(async (req, res, next) => {
  const id = parseInt(req.params.id);
  pool.query(
    'SELECT * FROM public.movies WHERE id= $1',
    [id],
    (error, result) => {
      if (error) {
        res.end();
        return;
      }

      const noResult = !result.rows.length;
      if (noResult) {
        res.status(200).json({
          status: 'no such movie'
        });
        return;
      }

      pool.query(
        'DELETE FROM public.movies WHERE id= $1',
        [id],
        (error, result) => {
          res.status(200).json({
            status: 'item deleted'
          });
        }
      );
      if (result.rows[0].img) {
        fs.unlink(`./images/${result.rows[0].img}`, function(err) {
          if (err) {
            /// Delete old image if new one is provided .
            /// This if here is for testing only
            console.log('Error with image old img delete - movies');
          }
        });
        logsController.writeFileLog(`Deleted : ${result.rows[0].img}`);
      }
    }
  );
});
