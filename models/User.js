const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  productList: [{ type: Types.ObjectId, ref: 'ProductList' }]
});

module.exports = model('User', schema);
