import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

ReactDOM.render(
  <BrowserRouter>
    <App {...window.__APP_INITIAL_STATE__} />
  </BrowserRouter>,
  document.getElementById('app')
);
