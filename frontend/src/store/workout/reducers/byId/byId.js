/**
 * byId.js
 * Written by: Alex Kasemir
 */

/**
 * Description of the byId reducer
 */
const byId = (state = {}, action) => {
  switch (action.type) {
    case `GET_WORKOUTS_SUCCESS`:
      return action.workouts.reduce((newState, w) => {
        return {
          ...newState,
          [w.id]: {
            ...w,
          },
        };
      }, state);
    default:
      return state;
  }
};

export default byId;
