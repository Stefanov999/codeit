const fs = require('fs');
const dir = './images';
const catchAsync = require('./../utils/catchAsync');
const { readdir, stat } = require('fs/promises');
const { join } = require('path');
const logsController = require('./logsController');

exports.filesReader = catchAsync(async (req, res, next) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      throw err;
    }

    res.status(200).json({
      status: 'success',
      data: {
        files
      }
    });
  });
});

exports.getSizeImageFolder = catchAsync(async (req, res, next) => {
  const dirSize = async dir => {
    const files = await readdir(dir, { withFileTypes: true });

    const paths = files.map(async file => {
      const path = join(dir, file.name);

      if (file.isDirectory()) return await dirSize(path);

      if (file.isFile()) {
        const { size } = await stat(path);

        return size;
      }

      return 0;
    });

    return (await Promise.all(paths))
      .flat(Infinity)
      .reduce((i, size) => i + size, 0);
  };

  res.status(200).json({
    status: 'success',
    data: {
      folder: await dirSize('./images')
    }
  });
});

exports.getStats = catchAsync(async (req, res, next) => {
  fs.stat(`./images/${req.body.img}`, (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    const sizeData = (stats.size / 1024).toFixed(2);
    const dateData = `${stats.mtime}`.slice(4, 15);
    res.status(200).json({
      status: 'success',
      data: {
        size: sizeData,
        date: dateData
      }
    });
  });
});

exports.downloadFile = catchAsync(async (req, res, next) => {
  res.download(`./images/${req.params.id}`);
  logsController.writeFileLog(`Downloaded : ${req.params.id}`);
});

exports.deleteFile = catchAsync(async (req, res, next) => {
  fs.rmSync(`./images/${req.body.img}`, {
    force: true
  });
  logsController.writeFileLog(`Deleted : ${req.body.img}`);
  res.status(200).json({
    status: 'success'
  });
});
