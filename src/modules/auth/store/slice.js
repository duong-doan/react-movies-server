import { createSlice } from '@reduxjs/toolkit';
import * as actions from './actions';
import { KEY_ACCESS_TOKEN_STR, KEY_USER_LOGIN } from './constant';

const initialState = {
  user: JSON.parse(localStorage.getItem(KEY_USER_LOGIN)) || {},
  token: JSON.parse(localStorage.getItem(KEY_ACCESS_TOKEN_STR)) || '',
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    authLoginRequestSuccess: (state, action) => {
      const { accessToken } = action.payload;
      localStorage.setItem(
        KEY_ACCESS_TOKEN_STR,
        JSON.stringify(`${accessToken}`)
      );

      state.token = accessToken;
      state.loading = false;
    },
    authRegisterRequestSuccess: (state) => {
      state.loading = false;
    },
    getUserInfoRequest: (state, action) => {
      return state;
    },
    getUserInfoSuccess: (state, action) => {
      const { email } = action.payload;
      localStorage.setItem(KEY_USER_LOGIN, JSON.stringify({ email }));
      state.user = { ...state.user, ...action.payload };
      return state;
    },
    getUserInfoFailed: (state, action) => {
      return state;
    },
  },
  extraReducers: {
    [actions.authLoginRequest.type]: (state) => {
      state.loading = true;
    },
    [actions.authLoginError.type]: (state) => {
      state.loading = false;
    },
    [actions.authRegisterError.type]: (state, action) => {
      state.loading = false;
    },
    [actions.authRegisterRequest.type]: (state, action) => {
      state.loading = true;
    },
    [actions.logoutRequest.type]: (state) => {
      state.token = '';
    },
  },
});

export const {
  authLoginRequestSuccess,
  authRegisterRequestSuccess,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailed,
} = authSlice.actions;

export default authSlice.reducer;
