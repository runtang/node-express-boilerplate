var winston = require('winston');
var path = require('path');
var gConfig = require('../common/config');
require('winston-daily-rotate-file');
var transports = [new winston.transports.DailyRotateFile({
    filename: path.join(__dirname, '../accesslog', 'log'),
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: 'info'
  })];
var logger = new(winston.Logger)({transports: transports, exitOnError: false});
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};
module.exports = require('morgan')('combined', {'stream': logger.stream});
