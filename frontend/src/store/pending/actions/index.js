/**
 * actions.js
 * Written by: Alex Kasemir
 */
import * as create from './create';
import * as update from './update';
import * as destroy from './destroy';

export default {
  ...create,
  ...update,
  ...destroy,
};
