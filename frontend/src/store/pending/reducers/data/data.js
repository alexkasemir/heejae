/**
 * data.js
 * Written by: Alex Kasemir
 */
import omit from 'lodash/omit';

import pendingActions from 'store/pending/actions';

/**
 * Description of the data reducer
 */
const data = (state = {}, action) => {
  switch (action.type) {
    case pendingActions.CREATE_PENDING_DATA:
    case pendingActions.UPDATE_PENDING_DATA:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.changes,
        },
      };
    case pendingActions.DELETE_PENDING_DATA:
      return omit(state, action.id);
    default:
      return state;
  }
};

export default data;
