/**
 * checkExpiredToken.js
 * Written by: Alex Kasemir
 */
import jwtDecode from 'jwt-decode';

import { refreshToken } from 'store/user/actions/refreshToken';
import { removeToken } from 'store/user/actions/removeToken';

export const CHECK_EXPIRED_TOKEN_START = `CHECK_EXPIRED_TOKEN_START`;
export const CHECK_EXPIRED_TOKEN_SUCCESS = `CHECK_EXPIRED_TOKEN_SUCCESS`;
export const CHECK_EXPIRED_TOKEN_FAILURE = `CHECK_EXPIRED_TOKEN_FAILURE`;

export const checkExpiredTokenStart = () => ({
  type: CHECK_EXPIRED_TOKEN_START,
});

export const checkExpiredTokenSuccess = (token) => ({
  type: CHECK_EXPIRED_TOKEN_SUCCESS,
  token,
});

export const checkExpiredTokenFailure = (error) => ({
  type: CHECK_EXPIRED_TOKEN_FAILURE,
  error,
});

/**
 * Description of the checkExpiredToken action
 */
export const checkExpiredToken = (token) => {
  return (dispatch) => {
    const decodedToken = jwtDecode(token);
    // difference in seconds
    const timeToExpired
      = (new Date(decodedToken.exp * 1000) - new Date()) / 1000;
    dispatch(checkExpiredTokenStart());
    return new Promise((resolve, reject) => {
      if (timeToExpired > 0) {
        dispatch(checkExpiredTokenSuccess());
        dispatch(refreshToken(token))
          .then(() => resolve())
          .catch(() => reject());
      } else {
        dispatch(checkExpiredTokenFailure());
        dispatch(removeToken());
        reject();
      }
    });
  };
};
