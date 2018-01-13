/**
 * allWorkouts.js
 * Written by: Alex Kasemir
 */
import { createSelector } from 'reselect';

const allWorkouts = createSelector(
  [
    (state) => state.workout.byId,
    (state) => state.workout.allIds,

  ],
  (byId, allIds) => {
    return allIds.map((p) => byId[p])
      .sort((a, b) => new Date(b.start_ts) - new Date(a.start_ts));
  },
);

export default allWorkouts;
