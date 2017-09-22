/**
 * index.js
 * Written by: Connor Taylor
 **/
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'normalize.css/normalize.css';

import App from 'views/App';

import store from 'store';
import theme from './theme';

import './index.css';

/* eslint-disable */
window.fbAsyncInit = function () {
  FB.init({
    appId: ``,
    xfbml: true,
    version: `v2.8`,
  });
  FB.getLoginStatus(function (response) {
    window.fbApiInit = true;
  });
};

//load the JavaScript SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = `//connect.facebook.net/en_US/sdk.js`;
  fjs.parentNode.insertBefore(js, fjs);
}(document, `script`, `facebook-jssdk`));
/* eslint-enable */

ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById(`main`),
);

