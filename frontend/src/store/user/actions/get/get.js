/**
 * getUser.js
 * Written by: Alex Kasemir
 */

import request from 'store/request';

export const GET_USER_START = `GET_USER_START`;
export const GET_USER_SUCCESS = `GET_USER_SUCCESS`;
export const GET_USER_FAILURE = `GET_USER_FAILURE`;

export const getUserStart = () => ({
  type: GET_USER_START,
});

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailure = (id, error) => ({
  type: GET_USER_FAILURE,
  id,
  error,
});

/**
 * Description of the getUser action
 */
export const getUser = () => {
  return (dispatch) => {
    dispatch(getUserStart());

    return new Promise((resolve, reject) => {
      dispatch(request({
        url: `/users/me/`,
        method: `GET`,
      }))
        .then((response) => {
          dispatch(getUserSuccess(response.data));
          resolve();
        })
        .catch((error) => {
          dispatch(getUserFailure(error));
          reject();
        });
    });
  };
};

export default getUser;
