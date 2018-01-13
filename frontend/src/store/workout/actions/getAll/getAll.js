/**
 * getAll.js
 * Written by: Alex Kasemir
 */

import request from 'store/request';

export const getWorkoutsStart = () => ({
  type: `GET_WORKOUTS_START`,
});

export const getWorkoutsSuccess = (data) => ({
  type: `GET_WORKOUTS_SUCCESS`,
  workouts: data.results,
  next: data.next,
});

export const getWorkoutsFailure = (error) => ({
  type: `GET_WORKOUTS_FAILURE`,
  error,
});


export const getAll = (getNext = false) => {
  return (dispatch, getState) => {
    dispatch(getWorkoutsStart());
    const { meta } = getState().workout;
    const hasNext = meta && meta.next;
    const urlConfig = {
      url: getNext && hasNext ? meta.next : `/workouts/`,
      method: `GET`,
      domainIncluded: getNext && hasNext,
    };

    return new Promise((resolve, reject) => {
      return dispatch(request(urlConfig))
        .then((response) => {
          dispatch(getWorkoutsSuccess(response.data));
          resolve();
        })
        .catch((error) => {
          dispatch(getWorkoutsFailure(error));
          reject();
        });
    });
  };
};
