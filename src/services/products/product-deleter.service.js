const mongoose = require('mongoose');
const Product = mongoose.model('Product');

async function destroy(id){
    if (!id) {
      throw new Error({
          label: 'is required',
      });
    }
    return Product.deleteOne({_id: id})
}

module.exports = {
  destroy,
};
