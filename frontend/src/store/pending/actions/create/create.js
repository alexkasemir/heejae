/**
 * create.js
 * Written by: Alex Kasemir
 */


export const CREATE_PENDING_DATA = `CREATE_PENDING_DATA`;

/**
 * Description of the createPendingData action
 */
export const create = (args = {}) => {
  return {
    type: CREATE_PENDING_DATA,
    id: args.id,
    changes: args.changes,
  };
};
