/**
 * actions.js
 * Written by: Alex Kasemir
 */

import * as create from './create';
import * as destroy from './destroy';

export default {
  ...create,
  ...destroy,
};
