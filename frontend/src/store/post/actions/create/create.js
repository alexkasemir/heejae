/**
 * create.js
 * Written by: Alex Kasemir
 */

import request from 'store/request';

export const CREATE_POST_START = 'CREATE_POST_START';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const createPostStart = () => ({
  type: CREATE_POST_START,
});

export const createPostSuccess = (post) => ({
  type: CREATE_POST_SUCCESS,
  post,
});

export const createPostFailure = (error) => ({
  type: CREATE_POST_FAILURE,
  error,
});


export const create = (data) => {
  return (dispatch) => {
    dispatch(createPostStart());

    return new Promise((resolve, reject) => {
      return dispatch(request({
        method: `post`,
        url: `/posts/`,
        data,
      }))
        .then((response) => {
          dispatch(createPostSuccess(response.data));
          resolve();
        })
        .catch((error) => {
          dispatch(createPostFailure(error));
          reject();
        });
    });
  };
};

