const mongoose = require('mongoose');
const User = mongoose.model('User');

async function create(user){
    if (!user.user) {
      throw new Error({
          user: 'is required',
      });
    }
    if (!user.password) {
      throw new Error({
          password: 'is required',
      });
    }
    const finalUser = new User(user);
    finalUser.setPassword(user.password);
    return finalUser.save()
      .then(() => {
        return ({ user: finalUser.toAuthJSON() })
      });
}

module.exports = {
  create,
};
