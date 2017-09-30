/**
 * byId.js
 * Written by: Alex Kasemir
 */
import postActions from 'store/post/actions';

/**
 * Description of the byId reducer
 */
const byId = (state = {}, action) => {
  switch (action.type) {
    case postActions.GET_POSTS_SUCCESS:
      return action.posts.reduce((newState, post) => {
        return {
          ...newState,
          [post.id]: {
            ...post,
          },
        };
      }, state);
    default:
      return state;
  }
};

export default byId;
