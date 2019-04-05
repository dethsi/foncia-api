const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Gestionnaire = mongoose.model('User');

passport.use(new LocalStrategy({
  usernameField: 'user[user]',
  passwordField: 'user[password]',
}, (user, password, done) => {
  Gestionnaire.findOne({ user })
    .then((user) => {
      if(!user || !user.validatePassword(password)) {
        return done(null, false, { errors: { 'user or password': 'is invalid' } });
      }

      return done(null, user);
    }).catch(done);
}));
