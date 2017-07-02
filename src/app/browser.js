import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

ReactDOM.render(<App {...window.__APP_INITIAL_STATE__} />, document.getElementById('app'));
