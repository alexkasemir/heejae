/**
 * destroy.js
 * Written by: Alex Kasemir
 */

export const DESTROY_ALERT = `DESTROY_ALERT`;

export const destroy = (id) => ({
  type: DESTROY_ALERT,
  id,
});

