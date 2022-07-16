import { createAction } from '@reduxjs/toolkit';
import * as types from './constant';

export const authLoginRequest = createAction(types.AUTH_LOGIN_REQUEST);
export const authLoginError = createAction(types.AUTH_LOGIN_ERROR);

export const authRegisterRequest = createAction(types.AUTH_REGISTER_REQUEST);
export const authRegisterError = createAction(types.AUTH_REGISTER_ERROR);
