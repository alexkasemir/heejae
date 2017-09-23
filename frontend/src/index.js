/**
 * index.js
 * Written by: Alex Kasemir
 **/
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import App from 'views/App';

import store from 'store';

import './index.css';


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById(`main`),
);

