const passport = require('passport');

async function authenticate(req, res, next)  {
    const { body: { user } } = req;

    if (!user.user) {
      return ({
        errors: {
          user: 'is required',
        },
      });
    }

    if (!user.password) {
      return {
        errors: {
          password: 'is required',
        },
      };
    }
  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if (err) {
      return next(err);
    }
    if (passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return ({ user: user.toAuthJSON() });
    }
    return info;
  })(req, res, next);
}

module.exports = {
  authenticate
};
