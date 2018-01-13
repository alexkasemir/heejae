/**
 * reducers.js
 * Written by: Alex Kasemir
 */
import { combineReducers } from 'redux';

import byId from 'store/workout/reducers/byId';
import allIds from 'store/workout/reducers/allIds';
import meta from 'store/workout/reducers/meta';

export default combineReducers({
  byId,
  allIds,
  meta,
});
