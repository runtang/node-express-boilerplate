const winston = require('winston');
const path = require('path');
const gConfig = require('../common/config');
require('winston-daily-rotate-file');
const transports = [new winston.transports.DailyRotateFile({
    filename: path.join(__dirname, '../accesslog', 'log'),
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: 'info'
  })];
const logger = new(winston.Logger)({transports: transports, exitOnError: false});
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};
module.exports = require('morgan')('combined', {'stream': logger.stream});
