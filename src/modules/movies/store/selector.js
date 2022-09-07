import { createSelector } from '@reduxjs/toolkit';

const selectMoviesSelf = (state) => state.movies.moviesList;

export const selectMoviesList = createSelector(
  selectMoviesSelf,
  (state) => state
);
