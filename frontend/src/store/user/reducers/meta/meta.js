/**
 * meta.js
 * Written by: Alex Kasemir
 */
import userActions from 'store/user/actions';
/**
 * Description of the meta reducer
 */
const meta = (state = {}, action) => {
  switch (action.type) {
    case userActions.GET_USER_SUCCESS:
    case userActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case userActions.REMOVE_TOKEN_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default meta;
