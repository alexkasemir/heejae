/**
 * getAll.js
 * Written by: Alex Kasemir
 */

import request from 'store/request';

export const GET_POSTS_START = `GET_POSTS_START`;
export const GET_POSTS_SUCCESS = `GET_POSTS_SUCCESS`;
export const GET_POSTS_FAILURE = `GET_POSTS_FAILURE`;

export const getPostsStart = () => ({
  type: GET_POSTS_START,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  posts,
});

export const getPostsFailure = (error) => ({
  type: GET_POSTS_FAILURE,
  error,
});


export const getAll = () => {
  return (dispatch) => {
    dispatch(getPostsStart());

    return new Promise((resolve, reject) => {
      return dispatch(request({
        method: `get`,
        url: `/posts/`,
      }))
        .then((response) => {
          dispatch(getPostsSuccess(response.data.results));
          resolve();
        })
        .catch((error) => {
          dispatch(getPostsFailure(error));
          reject();
        });
    });
  };
};
