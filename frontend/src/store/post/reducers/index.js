/**
 * reducers.js
 * Written by: Alex Kasemir
 */
import { combineReducers } from 'redux';

import byId from 'store/post/reducers/byId';
import allIds from 'store/post/reducers/allIds';
import meta from 'store/post/reducers/meta';


export default combineReducers({
  byId,
  allIds,
  meta,
});
