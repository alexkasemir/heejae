/**
 * actions.js
 * Written by: Alex Kasemir
 */
import * as byId from './byId';
import * as meta from './meta';
import * as session from './session';

export default {
  ...byId,
  ...meta,
  ...session,
};
