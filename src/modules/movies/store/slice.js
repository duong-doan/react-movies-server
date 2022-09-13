import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moviesList: [],
  loading: false,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getListMovieSuccess: (state, action) => {
      state.moviesList = action.payload;
      state.loading = false;
    },
    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearDataMovies: (state) => {
      state.moviesList = [];
    },
  },
});

export const { getListMovieSuccess, updateLoading, clearDataMovies } =
  movieSlice.actions;

export default movieSlice.reducer;
