import { all, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { loginUserRequest, registerUserRequest } from 'services/authService';
import { toast } from 'react-toastify';

import * as actions from './actions';
import { authLoginRequestSuccess, authRegisterRequestSuccess } from './slice';

function* fetchAuthLoginMid(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(loginUserRequest, { email, password });
    if (!response?.data?.message) {
      const accessToken = response?.data?.accessToken;
      yield put(authLoginRequestSuccess({ email, accessToken }));
    } else {
      yield put(actions.authLoginError(response?.data?.message));
    }
  } catch (error) {
    console.log('error login', error);
  }
}

function* fetchAuthRegisterMid(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(registerUserRequest, { email, password });
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

function* logoutRequestMid(action) {
  const { navigate } = action.payload;
  yield localStorage.clear();
  navigate('/login');
}

export default function* authSaga() {
  yield all([
    takeLatest(actions.authLoginRequest.type, fetchAuthLoginMid),
    takeLatest(actions.authRegisterRequest.type, fetchAuthRegisterMid),
    takeEvery(actions.logoutRequest.type, logoutRequestMid),
  ]);
}
