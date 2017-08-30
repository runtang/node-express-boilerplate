var winston = require('winston');
var path = require('path');
var gConfig = require('./config');
require('winston-daily-rotate-file');
var transports = [
  new(winston.transports.Console)(),
  new winston.transports.DailyRotateFile({
    filename: path.join(__dirname, '../log', 'log'),
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: gConfig.isEnvDev
      ? 'debug'
      : 'info'
  })
];
var logger = new(winston.Logger)({transports: transports, exitOnError: false});
module.exports = logger;
