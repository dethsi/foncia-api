const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  label:  String,
  price: Number,
  amount: Number,
});

productSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    label: this.label,
    price: this.price,
    amount: this.amount,
  };
};

module.exports = mongoose.model('Product', productSchema);
