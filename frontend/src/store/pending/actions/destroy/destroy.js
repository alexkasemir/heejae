/**
 * destroy.js
 * Written by: Alex Kasemir
 */

export const DELETE_PENDING_DATA = `DELETE_PENDING_DATA`;

export const destroy = (args = {}) => {
  return { type: DELETE_PENDING_DATA, id: args.id };
};
