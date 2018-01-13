/**
 * create.js
 * Written by: Alex Kasemir
 */

import request from 'store/request';

export const createWorkoutStart = () => ({
  type: 'CREATE_WORKOUT_START',
});

export const createWorkoutSuccess = (workout) => ({
  type: 'CREATE_WORKOUT_SUCCESS',
  workout,
});

export const createWorkoutFailure = (error) => ({
  type: 'CREATE_WORKOUT_FAILURE',
  error,
});


export const create = (data) => {
  return (dispatch) => {
    dispatch(createWorkoutStart());

    const formatted = {
      start_ts: data.startDate,
      end_ts: data.endDate,
    };

    return new Promise((resolve, reject) => {
      return dispatch(request({
        method: `post`,
        url: `/workouts/`,
        data: formatted,
      }))
        .then((response) => {
          dispatch(createWorkoutSuccess(response.data));
          resolve();
        })
        .catch((error) => {
          dispatch(createWorkoutFailure(error.response.data));
          reject();
        });
    });
  };
};

