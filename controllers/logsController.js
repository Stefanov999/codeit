const fsz = require('fs/promises');
const fs = require('fs');
const catchAsync = require('./../utils/catchAsync');
const momento = require('../utils/momento');

exports.writeFileLog = async function(information) {
  let moment = momento();

  try {
    await fsz.appendFile(
      './textFiles/logs.txt',
      `\n ${information} on ${moment} `
    );
  } catch (err) {
    console.log(err);
  }
};
/// This Function is File Stream and is not used in this Project
exports.readFileAsStream = catchAsync(async (req, res, next) => {
  let readableStream = fs.createReadStream(`./textFiles/logs.txt`, 'UTF8');
  readableStream.on('error', function(error) {
    console.log(`error: ${error.message}`);
  });

  readableStream.on('data', chunk => {
    res.status(200).json({
      status: 'success',
      data: {
        chunk
      }
    });
  });
});

exports.readFileAsync = catchAsync(async (req, res, next) => {
  const data = await fsz.readFile('./textFiles/logs.txt');
  let dataArray = data.toString().split('\n');

  res.status(200).json({
    status: 'success',
    data: {
      dataArray
    }
  });
});

exports.claerFileAsync = catchAsync(async (req, res, next) => {
  let moment = momento();
  try {
    fs.truncate('./textFiles/logs.txt', 0, function() {
      console.log('done');
    });
    await fsz.appendFile(
      './textFiles/logs.txt',
      `All Data Cleared on ${moment} `
    );
    res.end();
  } catch (err) {
    console.log('Error on Logs Clearing');
  }
});
