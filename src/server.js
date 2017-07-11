import express from 'express';
import mongoose from 'mongoose';
import { Product } from './schema';
import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import template from './template';
import path from 'path';
import App from './components/app';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/arbstore', { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const server = express();

server.use('/static', express.static('static'));

server.use((req, res, next) => {
  Product.find().then(docs => {
    const initialState = { productsdata: docs };
    const context = {};
    res.send(template({
      body: renderToString(
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App {...initialState} />
        </StaticRouter>
      ),
      title: 'Test',
      initialState: JSON.stringify(initialState)
    }));
  });
});

server.listen(8080);
