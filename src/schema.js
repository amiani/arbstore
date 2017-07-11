import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: { data: Buffer, contentType: String }
});
export const Product = mongoose.model('Product', productSchema);
