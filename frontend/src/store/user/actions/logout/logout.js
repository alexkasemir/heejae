/**
 * logout.js
 * Written by: Alex Kasemir
 */

import request from 'store/request';

import { removeToken } from 'store/user/actions/removeToken';

export const LOGOUT_START = `LOGOUT_START`;
export const LOGOUT_SUCCESS = `LOGOUT_SUCCESS`;
export const LOGOUT_FAILURE = `LOGOUT_FAILURE`;

export const logoutStart = () => ({
  type: LOGOUT_START,
});

export const logoutSuccess = (data) => ({
  type: LOGOUT_SUCCESS,
  data,
});

export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  error,
});

/**
 * Description of the logout action
 */
export const logout = () => {
  return (dispatch) => {
    dispatch(logoutStart());
    dispatch(removeToken());

    return new Promise((resolve, reject) => {
      dispatch(request({
        url: `/auth/rest/logout/`,
        method: `POST`,
      }))
        .then(() => {
          dispatch(logoutSuccess());
          resolve();
        })
        .catch((error) => {
          dispatch(logoutFailure(error));
          reject();
        });
    });
  };
};

export default logout;
