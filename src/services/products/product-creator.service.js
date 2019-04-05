const mongoose = require('mongoose');
const Product = mongoose.model('Product');

async function create(product){
    if (!product.label) {
      throw new Error({
        label: 'is required',
      });
    }
    if (!product.price) {
      throw new Error({
        price: 'is required',
      });
    }
    if (!product.amount) {
      throw new Error({
        amount: 'is required',
      });
    }
    const finalProduct = new Product(product);
    return finalProduct.save()
      .then(() => {
        return ({ product: finalProduct.toAuthJSON() })
      });
}

module.exports = {
  create,
};
