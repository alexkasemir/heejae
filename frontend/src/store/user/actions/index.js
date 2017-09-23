/**
 * actions.js
 * Written by: Alex Kasemir
 */
import * as get from './get';
import * as login from './login';
import * as loadToken from './loadToken';
import * as loadSession from './loadSession';
import * as checkExpiredToken from './checkExpiredToken';
import * as removeToken from './removeToken';
import * as refreshToken from './refreshToken';

export default {
  ...get,
  ...login,
  ...loadSession,
  ...loadToken,
  ...checkExpiredToken,
  ...removeToken,
  ...refreshToken,
};
