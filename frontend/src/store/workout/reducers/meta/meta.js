/**
 * meta.js
 * Written by: Alex Kasemir
 */

const initialState = {
  loading: false,
  loaded: false,
  posting: false,
};

/**
 * Description of the meta reducer
 */
const meta = (state = initialState, action) => {
  switch (action.type) {
    case `GET_WORKOUTS_START`:
      return {
        ...state,
        loading: true,
      }
    case `GET_WORKOUTS_SUCCESS`:
      return {
        ...state,
        loading: false,
        loaded: true,
        next: action.next,
      }
    case `CREATE_WORKOUT_START`:
      return {
        ...state,
        posting: true,
        posted: false,
      }
    case `CREATE_WORKOUT_SUCCESS`:
      return {
        ...state,
        posting: false,
        posted: true,
      }
    case `CREATE_WORKOUT_FAILURE`:
      return {
        ...state,
        posting: false,
        posted: false,
        error: action.error.detail,
      }
    default:
      return state;
  }
};

export default meta;
