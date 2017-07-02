import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import path from 'path';
import App from './app/index';

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
