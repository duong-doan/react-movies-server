import { createSelector } from '@reduxjs/toolkit';

const selectUserSelf = (state) => state.auth.user;
const selectUserLoadingSelf = (state) => state.auth.loading;
const selectTokenSelf = (state) => state.auth.token;

export const selectUser = createSelector(selectUserSelf, (state) => state);
export const selectUserToken = createSelector(
  selectTokenSelf,
  (state) => state
);
export const selectUserLoading = createSelector(
  selectUserLoadingSelf,
  (state) => state
);
