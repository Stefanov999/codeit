const multer = require('multer');
const AppError = require('./appError');
const sharp = require('sharp');
const logsController = require('../controllers/logsController');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image !', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 3200000 }
});
const oneGBLimit = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 10000000 }
});

exports.multerUpload = upload.single('img');
exports.multerUploadOneGb = oneGBLimit.single('img');

exports.sharpWebp = (req, res, next) => {
  if (!req.file) {
    return next();
  }
  let randomString = generateString(10);
  req.file.filename = `${randomString}.webp`;

  sharp(req.file.buffer)
    .toFormat('webp')
    .toFile(`${process.env.IMGURL}/${req.file.filename}`);
  next();
};

exports.sharpWebpNoFormat = (req, res, next) => {
  if (!req.file) {
    return next();
  }
  req.file.filename = req.file.originalname;
  sharp(req.file.buffer).toFile(`${process.env.IMGURL}/${req.file.filename}`);
  logsController.writeFileLog(`Uploaded : ${req.file.originalname}`);
  next();
};
