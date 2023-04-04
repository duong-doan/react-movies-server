import { createSlice } from '@reduxjs/toolkit';
// import uniq from 'lodash/uniq';
// import map from 'lodash/map';

const initialState = {
  list: {},
  ids: [],
};

export const chattingSlice = createSlice({
  name: 'chatting',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    listMessage: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { listMessage } = chattingSlice.actions;

export default chattingSlice.reducer;
