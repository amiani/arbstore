import mongoose from 'mongoose';
import { Product } from './src/schema';
import fs from 'fs';

mongoose.connect('mongodb://localhost/arbstore', { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

for (let i = 0; i != 10; i++) {
  new Product({
    name: `watch#${i}`,
    price: (i + 10.4),
    description: 'this is a really cool watch, anyone in their right mind would buy it right away!',
    imagepath: 'watchimg'
  }).save(err => {
    if (err) {
      console.log(err);
    }
  });
  console.log('done ',i);
}
