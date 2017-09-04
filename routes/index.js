const express = require('express');
const router = express.Router();
const gConfig = require('../common/config');
const logger = require('../common/logger');
const utils = require('../common/utils');
const modelUser = require('../models/user');
router.get('/', (req, res, next) => {
  modelUser.getLoginUser().then(data => {
    req.session.count = !req.session.count
      ? 1
      : ++req.session.count;
    res.render('index', {
      title: 'node-express-boilerplate',
      count: req.session.count,
      isDev: gConfig.isEnvDev,
      isProd: gConfig.isEnvProd,
      user: JSON.stringify(data)
    });
  }, err => {
    logger.error('getLoginUser', err);
    res.render('error', {message: 500});
  });
});
module.exports = router;
