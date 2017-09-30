/**
 * create.js
 * Written by: Alex Kasemir
 */

import v4 from 'uuid/v4';

export const CREATE_ALERT = `CREATE_ALERT`;


export const create = ({ id = v4(), message, style = `success`, time = 3000 }) => {
  return (dispatch) => {
    setTimeout(() => dispatch({ type: `DESTROY_ALERT`, id }), time);
    dispatch({
      type: CREATE_ALERT,
      id,
      message,
      style,
    });
  };
};
