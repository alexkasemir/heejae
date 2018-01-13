/**
 * meta.js
 * Written by: Alex Kasemir
 */

const initialState = {
  loaded: false,
  loading: false,
  posting: false,
};

/**
 * Description of the meta reducer
 */
const meta = (state = initialState, action) => {
  switch (action.type) {
    case `GET_POSTS_START`:
      return {
        ...state,
        loading: true,
      }
    case `GET_POSTS_SUCCESS`:
      return {
        ...state,
        loading: false,
        loaded: true,
        next: action.next,
      }
    case `CREATE_POST_START`:
      return {
        ...state,
        posting: true,
        posted: false,
      }
    case `CREATE_POST_SUCCESS`:
      return {
        ...state,
        posting: false,
        posted: true,
      }
    case `CREATE_POST_FAILURE`:
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
