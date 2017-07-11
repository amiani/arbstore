import mongoose from 'mongoose';
import { Product } from './src/schema';
import fs from 'fs';

mongoose.connect('mongodb://localhost/arbstore', { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const imgfile = fs.readFileSync('./watchimg');
console.log(imgfile);
for (let i = 0; i != 10; i++) {
  new Product({
    name: `watch#${i}`,
    price: (i + 10.4),
    description: 'this is a really cool watch, anyone in their right mind would buy it right away!',
    image: {
      data: imgfile,
      contentType: 'image/jpg'
    }
  }).save(err => {
    if (err) {
      console.log(err);
    }
  });
  console.log('done ',i);
}
