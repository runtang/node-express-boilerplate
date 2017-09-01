const winston = require('winston');
const path = require('path');
const gConfig = require('./config');
require('winston-daily-rotate-file');
const transports = [
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
const logger = new(winston.Logger)({transports: transports, exitOnError: false});
module.exports = logger;
