/**
 * reducers.js
 * Written by: Alex Kasemir
 */
import { combineReducers } from 'redux';

import meta from 'store/user/reducers/meta';
import auth from 'store/user/reducers/auth';


export default combineReducers({
  meta,
  auth,
});
