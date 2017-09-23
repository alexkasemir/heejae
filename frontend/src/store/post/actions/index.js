/**
 * actions.js
 * Written by: Alex Kasemir
 */
import * as getAll from './getAll';
import * as get from './get';
import * as create from './create';

export default {
  ...getAll,
  ...get,
  ...create,
};
