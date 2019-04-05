const mongoose = require('mongoose');
const Users = mongoose.model('User');

async function getAll(){
  return Users.find({})
    .then((users) => {
      return users;
  })
}

module.exports = {
  getAll,
};
