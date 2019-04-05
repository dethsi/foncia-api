const mongoose = require('mongoose');
const Product = mongoose.model('Product');

async function update(id, product){
  if (!id) {
    throw new Error({
        label: 'is required',
    });
  }
  await Product.updateOne({_id: id}, product);
  return Product.findOne({_id: id});
}

module.exports = {
  update,
};
