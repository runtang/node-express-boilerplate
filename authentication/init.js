const passport = require('passport');
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy;
const middlewareAuth = require('./middleware');
const saltRounds = 10
const myPlaintextPassword = 'my-password'
const salt = bcrypt.genSaltSync(saltRounds)
const passwordHash = bcrypt.hashSync(myPlaintextPassword, salt)
const user = {
  email: 'test-user@g.com',
  passwordHash,
  id: 1
}
function findUser(email, callback) {
  if (email === user.email) {
    return callback(null, user)
  }
  return callback(null)
}
passport.serializeUser(function(user, cb) {
  cb(null, user.email)
})
passport.deserializeUser(function(email, cb) {
  findUser(email, cb)
})
function initPassport() {
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {
    findUser(email, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user) {
        console.log('User not found')
        return done(null, false)
      }
      bcrypt.compare(password, user.passwordHash, (err, isValid) => {
        if (err) {
          return done(err)
        }
        if (!isValid) {
          return done(null, false)
        }
        return done(null, user)
      })
    })
  }))
  passport.middlewareAuth = middlewareAuth
}
module.exports = initPassport
