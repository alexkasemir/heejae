/**
 * allIds.js
 * Written by: Alex Kasemir
 */
import without from 'lodash/without';

import alertActions from 'store/alert/actions';

/**
 * Description of the allIds reducer
 */
const allIds = (state = [], action) => {
  switch (action.type) {
    case alertActions.ADD_ALERT:
      return [
        ...state,
        action.id,
      ];
    case alertActions.REMOVE_ALERT:
      return without(state, action.id);
    default:
      return state;
  }
};

export default allIds;
