import { createSelector } from '@reduxjs/toolkit';

const selectMoviesSelf = (state) => state.movies.moviesList;
const selectLoadingSelf = (state) => state.movies.loading;
const selectMovieInfoSelf = (state) => state.movies.movieInfo;
const selectCommentInMovieSelf = (state) => state.movies.comments;
const selectMoviesSearchSelf = (state) => state.movies.moviesSearch;
const selectListSelf = (state) => state.movies.list;
const selectIdsSelf = (state) => state.movies.ids;
const selectLoadingSearchSelf = (state) => state.movies.loadingSearch;

export const selectMoviesList = createSelector(
  selectMoviesSelf,
  (state) => state
);

export const selectLoading = createSelector(
  selectLoadingSelf,
  (state) => state
);

export const selectMovieInfo = createSelector(
  selectMovieInfoSelf,
  (state) => state
);

export const selectCommentInMovie = createSelector(
  selectCommentInMovieSelf,
  (state) => state
);

export const selectMoviesSearch = createSelector(
  selectMoviesSearchSelf,
  (state) => state
);

export const selectMovieById = (id) =>
  createSelector(selectListSelf, (state) => state[id]);

export const selectIds = createSelector(selectIdsSelf, (state) => state);

export const selectLoadingSearch = createSelector(
  selectLoadingSearchSelf,
  (state) => state
);
