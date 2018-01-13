/**
 * actions.js
 * Written by: Alex Kasemir
 */
import * as get from './get';
import * as getAll from './getAll';
import * as create from './create';

export default {
  ...get,
  ...getAll,
  ...create,
};
