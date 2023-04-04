import { all, put, takeLatest, call } from 'redux-saga/effects';
import * as ApiAuth from 'services/authService';
import { toast } from 'react-toastify';

import * as actions from './actions';
import {
  authLoginRequestSuccess,
  authRegisterRequestSuccess,
  getUserInfoSuccess,
  getUserInfoFailed,
} from './slice';

function* fetchAuthLoginMid(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(ApiAuth.loginUserRequest, { email, password });
    const userRes = yield call(ApiAuth.getUserInfoRequest, { email });

    if (!response?.data?.message) {
      const accessToken = response?.data?.accessToken;
      yield put(authLoginRequestSuccess({ accessToken }));
    } else {
      yield put(actions.authLoginError(response?.data?.message));
    }

    if (userRes?.data) {
      yield put(getUserInfoSuccess(userRes?.data));
    } else {
      yield put(getUserInfoFailed(response?.data?.message));
    }
  } catch (error) {
    console.log('error login', error);
  }
}

function* fetchAuthRegisterMid(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(ApiAuth.registerUserRequest, {
      email,
      password,
    });
    if (response?.data?.message === 'Register user successfull') {
      yield put(authRegisterRequestSuccess(response?.data?.message));
      toast.success(response?.data?.message);
    } else {
      yield put(actions.authRegisterError(response?.data?.message));
    }
  } catch (error) {
    console.log('error register', error);
  }
}

// function* getUserInfoRequestMid(action) {
//   const { email } = action.payload;
//   try {
//     const response = yield call(ApiAuth.getUserInfoRequest, { email });
//     console.log('response saga', response);
//   } catch (error) {
//     console.log('error register', error);
//   }
// }

function* logoutRequestMid() {
  yield localStorage.clear();
  window.location.replace('/login');
}

export default function* authSaga() {
  yield all([
    takeLatest(actions.authLoginRequest.type, fetchAuthLoginMid),
    takeLatest(actions.authRegisterRequest.type, fetchAuthRegisterMid),
    // takeLatest(getUserInfoRequest.type, getUserInfoRequestMid),
    takeLatest(actions.logoutRequest.type, logoutRequestMid),
  ]);
}
