import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getListMovieSuccess: (state, action) => {
      console.log('reducer', action.payload);
      state.movies = action.payload;
    },
  },
});

export const { getListMovieSuccess } = movieSlice.actions;

export default movieSlice.reducer;
