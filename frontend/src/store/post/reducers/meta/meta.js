/**
 * meta.js
 * Written by: Alex Kasemir
 */

const initialState = {
  loaded: false,
  loading: false,
};

/**
 * Description of the meta reducer
 */
const meta = (state = initialState, action) => {
  switch (action.type) {
    case `GET_POSTS_START`: {
      return {
        ...state,
        loading: true,
      }
    }
    case `GET_POSTS_SUCCESS`: {
      return {
        ...state,
        loading: false,
        loaded: true,
        next: action.next,
      }
    }
    default:
      return state;
  }
};

export default meta;
