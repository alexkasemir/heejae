/**
 * byId.js
 * Written by: Alex Kasemir
 */

import pick from 'lodash/pick';
import omit from 'lodash/omit';

import alertActions from 'store/alert/actions';

/**
 * Description of the byId reducer
 */
const byId = (state = {}, action) => {
  switch (action.type) {
    case alertActions.ADD_ALERT:
      return {
        ...state,
        [action.id]: pick(action, [`id`, `message`, `style`]),
      };
    case alertActions.REMOVE_ALERT:
      return omit(state, action.id);
    default:
      return state;
  }
};

export default byId;
