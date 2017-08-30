var express = require('express');
var router = express.Router();
var gConfig = require('../common/config');
var logger = require('../common/logger');
var utils = require('../common/utils');
var modelUser = require('../models/user');
router.get('/', function(req, res, next) {
  modelUser.getLoginUser().then(function(data) {
    res.render('index', {
      title: 'node-express-boilerplate',
      isDev: gConfig.isEnvDev,
      isProd: gConfig.isEnvProd,
      user: JSON.stringify(data)
    });
  }, function(err) {
    logger.error('getLoginUser', err);
    res.render('error', {message: 500});
  });
});
module.exports = router;
