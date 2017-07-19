import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  leadimagepath: String
});
export const Product = mongoose.model('Product', productSchema);
