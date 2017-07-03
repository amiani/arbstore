import express from 'express';
import mongoose from 'mongoose';
import { Product } from './app/schema';
import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import path from 'path';
import App from './app/index';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/arbstore', { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const testprod = new Product({ name: 'barbar' });
const server = express();

server.use('/static', express.static('static'));

server.get('/', (req, res) => {
  const initialState = { isMobile: true };
  res.send(template({
    body: renderToString(<App {...initialState} />),
    title: 'Test',
    initialState: JSON.stringify(initialState)
  }));
});

server.listen(8080);
