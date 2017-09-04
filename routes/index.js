const express = require('express');
const router = express.Router();
const passport = require('passport');
const gConfig = require('../common/config');
const logger = require('../common/logger');
const utils = require('../common/utils');
const modelUser = require('../models/user');
router.get('/', (req, res, next) => {
  res.redirect('/profile');
  // modelUser.getLoginUser().then(data => {
  //   req.session.count = !req.session.count
  //     ? 1
  //     : ++req.session.count;
  //   res.render('index', {
  //     title: 'node-express-boilerplate',
  //     count: req.session.count,
  //     isDev: gConfig.isEnvDev,
  //     isProd: gConfig.isEnvProd,
  //     user: JSON.stringify(data)
  //   });
  // }, err => {
  //   logger.error('getLoginUser', err);
  //   res.render('error', {message: 500});
  // });
});
router.get('/login', (req, res, next) => {
  res.render('login');
});
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/error'
}));
router.get('/profile', passport.middlewareAuth(), (req, res, next) => {
  let currentUser = req.user;
  console.log(currentUser);
  res.send('profile');
});
router.get('/logout', passport.middlewareAuth(), (req, res, next) => {
  req.logout();
  res.redirect('/login');
});
module.exports = router;
