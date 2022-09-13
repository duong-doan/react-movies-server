import { createSelector } from '@reduxjs/toolkit';

const selectMoviesSelf = (state) => state.movies.moviesList;
const selectLoadingSelf = (state) => state.movies.loading;

export const selectMoviesList = createSelector(
  selectMoviesSelf,
  (state) => state
);

export const selectLoading = createSelector(
  selectLoadingSelf,
  (state) => state
);
