/**
 * reducers.js
 * Written by: Alex Kasemir
 */
import { combineReducers } from 'redux';

import byId from 'store/user/reducers/byId';
import allIds from 'store/user/reducers/allIds';
import meta from 'store/user/reducers/meta';
import auth from 'store/user/reducers/auth';


export default combineReducers({
  byId,
  allIds,
  meta,
  auth,
});
