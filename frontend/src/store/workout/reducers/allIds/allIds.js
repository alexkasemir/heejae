/**
 * allIds.js
 * Written by: Alex Kasemir
 */

import uniq from 'lodash/uniq';

/**
 * Description of the allIds reducer
 */
const allIds = (state = [], action) => {
  switch (action.type) {
    case `GET_WORKOUTS_SUCCESS`:
      return uniq([...state, ...action.workouts.map((p) => p.id)]);
    default:
      return state;
  }
};

export default allIds;
