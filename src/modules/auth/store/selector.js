import { createSelector } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';

const selectUserSelf = (state) => state.auth.user;
const selectUserLoadingSelf = (state) => state.auth.loading;
const selectTokenSelf = (state) => state.auth.token;

export const selectUser = createSelector(selectUserSelf, (state) => state);
export const selectUserToken = createSelector(selectTokenSelf, (state) => {
  return state;
});
export const selectUserLoading = createSelector(
  selectUserLoadingSelf,
  (state) => state
);
export const selectIsAuthenticated = createSelector(selectUserSelf, (user) => {
  return !isEmpty(user);
});
