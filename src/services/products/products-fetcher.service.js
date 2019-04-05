const mongoose = require('mongoose');
const Products = mongoose.model('Product');

async function getAll(){
  return Products.find({})
    .then((products) => {
      return products;
  })
}

module.exports = {
  getAll,
};
