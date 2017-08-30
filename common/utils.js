var gConfig = require('./config');
var funcCollection = {};
funcCollection.zeroPad2 = function(value) {
  value = parseInt(value);
  return (value > 9
    ? ''
    : '0') + value;
}
module.exports = funcCollection;
