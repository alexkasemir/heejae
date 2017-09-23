/**
 * refreshToken.js
 * Written by: Alex Kasemir
 */

import { removeToken } from 'store/user/actions/removeToken';

import request from 'store/request';

export const REFRESH_TOKEN_START = `REFRESH_TOKEN_START`;
export const REFRESH_TOKEN_SUCCESS = `REFRESH_TOKEN_SUCCESS`;
export const REFRESH_TOKEN_FAILURE = `REFRESH_TOKEN_FAILURE`;

export const refreshTokenStart = () => ({
  type: REFRESH_TOKEN_START,
});

export const refreshTokenSuccess = (token) => ({
  type: REFRESH_TOKEN_SUCCESS,
  token,
});

export const refreshTokenFailure = (error) => ({
  type: REFRESH_TOKEN_FAILURE,
  error,
});


/**
 * Description of the refreshToken action
 */
export const refreshToken = (token) => {
  return (dispatch) => {
    dispatch(refreshTokenStart());

    return new Promise((resolve, reject) => {
      dispatch(request({
        url: `/auth/token-refresh/`,
        method: `POST`,
        data: { token },
      }))
        .then((response) => {
          try {
            window.localStorage.setItem(`jwtToken`, response.data.token);
          } catch (error) {} // eslint-disable-line
          dispatch(refreshTokenSuccess(response.data.token));
          resolve();
        })
        .catch((error) => {
          dispatch(removeToken());
          dispatch(refreshTokenFailure(error));
          reject();
        });
    });
  };
};
