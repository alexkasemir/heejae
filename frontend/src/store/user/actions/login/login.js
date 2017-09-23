/**
 * login.js
 * Written by: Alex Kasemir
 */
import request from 'store/request';

export const LOGIN_START = `LOGIN_START`;
export const LOGIN_SUCCESS = `LOGIN_SUCCESS`;
export const LOGIN_FAILURE = `LOGIN_FAILURE`;

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  token,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

/**
 * Logs in users by email
 */
export const login = (loginData) => {
  return (dispatch) => {
    dispatch(loginStart());

    return new Promise((resolve, reject) => {
      return dispatch(request({
        method: `post`,
        url: `/auth/rest/login/`,
        data: loginData,
      }))
        .then((response) => {
          const { token } = response.data;
          window.localStorage.setItem(`jwtToken`, token);
          dispatch(loginSuccess(token));
          resolve();
        }).catch((error) => {
          dispatch(loginFailure(error));
          reject(`Your participant ID or password is incorrect, please try again`, `danger`);
        });
    });
  };
};
