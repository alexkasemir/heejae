/**
 * allIds.js
 * Written by: Alex Kasemir
 */

import postActions from 'store/post/actions';
import uniq from 'lodash/uniq';

/**
 * Description of the allIds reducer
 */
const allIds = (state = [], action) => {
  switch (action.type) {
    case postActions.GET_POSTS_SUCCESS:
      return uniq(state.concat(action.posts.map((p) => p.id)));
    default:
      return state;
  }
};

export default allIds;
