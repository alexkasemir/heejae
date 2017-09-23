/**
 * auth.js
 * Written by: Alex Kasemir
 */

import userActions from 'store/user/actions';

const initialState = {
  token: ``,
};

/**
 * Description of the auth reducer
 */
const auth = (state = initialState, action) => {
  switch (action.type) {
    case userActions.LOGIN_SUCCESS:
    case userActions.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case userActions.REMOVE_TOKEN_SUCCESS:
      return {
        ...state,
        token: ``,
      };
    default:
      return state;
  }
};

export default auth;
