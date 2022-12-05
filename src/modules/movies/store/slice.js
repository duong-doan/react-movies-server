import { createSlice } from '@reduxjs/toolkit';
import map from 'lodash/map';

const initialState = {
  ids: [],
  list: {},
  moviesList: [],
  moviesSearch: [],
  movieInfo: {},
  comments: [],
  loading: false,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getListMovieSuccess: (state, action) => {
      const movies = action.payload;
      let list = { ...state.list };
      let ids = [];
      map(movies, (item) => {
        list = {
          ...list,
          [item._id]: {
            ...item,
          },
        };
        state.list = list;

        ids = [...state.ids, item._id];
        state.ids = ids;
      });
      state.moviesList = action.payload;
      state.loading = false;
    },
    getMovieInfoSuccess: (state, action) => {
      state.movieInfo = action.payload;
    },
    getCommentSuccess: (state, action) => {
      state.comments = action.payload;
    },
    getMovieSearchSuccess: (state, action) => {
      state.moviesSearch = action.payload;
    },
    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearDataMovies: (state) => {
      state.moviesList = [];
    },
    clearMovieInfo: (state) => {
      state.movieInfo = {};
    },
  },
});

export const {
  getListMovieSuccess,
  updateLoading,
  clearDataMovies,
  getMovieInfoSuccess,
  clearMovieInfo,
  getCommentSuccess,
  getMovieSearchSuccess,
} = movieSlice.actions;

export default movieSlice.reducer;
