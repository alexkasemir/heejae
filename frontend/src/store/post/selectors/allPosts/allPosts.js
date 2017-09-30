/**
 * allPosts.js
 * Written by: Alex Kasemir
 */
import { createSelector } from 'reselect';

const allPosts = createSelector(
  [
    (state) => state.post.byId,
    (state) => state.post.allIds,

  ],
  (byId, allIds) => {
    return allIds.map((p) => byId[p])
      .sort((a, b) => new Date(b.created_ts) - new Date(a.created_ts));
  },
);

export default allPosts;
