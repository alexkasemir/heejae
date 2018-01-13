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

export const getPostsSuccess = (data) => ({
  type: GET_POSTS_SUCCESS,
  posts: data.results,
  next: data.next,
});

export const getPostsFailure = (error) => ({
  type: GET_POSTS_FAILURE,
  error,
});


export const getAll = (getNext = false) => {
  return (dispatch, getState) => {
    dispatch(getPostsStart());
    const { meta } = getState().post;
    const hasNext = meta && meta.next;
    const urlConfig = {
      url: getNext && hasNext ? meta.next : `/posts/`,
      method: `GET`,
      domainIncluded: getNext && hasNext,
    };

    return new Promise((resolve, reject) => {
      return dispatch(request(urlConfig))
        .then((response) => {
          dispatch(getPostsSuccess(response.data));
          resolve();
        })
        .catch((error) => {
          dispatch(getPostsFailure(error));
          reject();
        });
    });
  };
};
