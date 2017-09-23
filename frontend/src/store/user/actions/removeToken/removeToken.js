/**
 * removeToken.js
 * Written by: Alex Kasemir
 */

export const REMOVE_TOKEN_START = `REMOVE_TOKEN_START`;
export const REMOVE_TOKEN_SUCCESS = `REMOVE_TOKEN_SUCCESS`;
export const REMOVE_TOKEN_FAILURE = `REMOVE_TOKEN_FAILURE`;

export const removeTokenStart = () => ({
  type: REMOVE_TOKEN_START,
});

export const removeTokenSuccess = () => ({
  type: REMOVE_TOKEN_SUCCESS,
});

export const removeTokenFailure = (error) => ({
  type: REMOVE_TOKEN_FAILURE,
  error,
});

/**
 * Description of the removeToken action
 */
export const removeToken = () => {
  return (dispatch) => {
    dispatch(removeTokenStart());
    window.localStorage.removeItem(`jwtToken`);
    dispatch(removeTokenSuccess());
  };
};
