const gConfig = require('./config');
const funcCollection = {};
funcCollection.zeroPad2 = (value) => {
  value = parseInt(value);
  return (value > 9
    ? ''
    : '0') + value;
}
module.exports = funcCollection;
