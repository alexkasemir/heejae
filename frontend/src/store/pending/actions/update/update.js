/**
 * update.js
 * Written by: Alex Kasemir
 */

export const UPDATE_PENDING_DATA = `UPDATE_PENDING_DATA`;

/**
 * Description of the createPendingData action
 */
export const update = (args = {}) => {
  return {
    type: UPDATE_PENDING_DATA,
    id: args.id,
    changes: args.changes,
  };
};
