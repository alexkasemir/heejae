/**
 * loadSession.js
 * Written by: Alex Kasemir
 */

import getUser from 'store/user/actions/get';
import { removeToken } from 'store/user/actions/removeToken';


export const LOAD_SESSION_START = `LOAD_SESSION_START`;
export const LOAD_SESSION_SUCCESS = `LOAD_SESSION_SUCCESS`;
export const LOAD_SESSION_FAILURE = `LOAD_SESSION_FAILURE`;

export const loadSessionStart = () => ({
  type: LOAD_SESSION_START,
});

export const loadSessionSuccess = () => ({
  type: LOAD_SESSION_SUCCESS,
});

export const loadSessionFailure = (error) => ({
  type: LOAD_SESSION_FAILURE,
  error,
});

/**
 * Description of the loadSession action
 */
export const loadSession = () => {
  return (dispatch) => {
    dispatch(loadSessionStart());
    return new Promise((resolve, reject) => {
      dispatch(getUser())
        .then(() => {
          dispatch(loadSessionSuccess());
          resolve();
        }).catch((error) => {
          dispatch(removeToken());
          dispatch(loadSessionFailure(error));
          reject(error);
        });
    });
  };
};
