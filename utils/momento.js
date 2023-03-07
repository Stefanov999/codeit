let momento = () => {
  let timeStamp = Date.now();
  const date = new Date(timeStamp);
  dateFormat =
    date.getHours() + ':' + date.getMinutes() + ', ' + date.toDateString();
  return dateFormat;
};

module.exports = momento;
