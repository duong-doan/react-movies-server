import { all, put, takeLatest, call } from 'redux-saga/effects';
import { getListMovieRequestApi } from 'services/movieService';
import * as actions from './actions';
import { getListMovieSuccess } from './slice';

function* fetchListMovieRequestMid() {
  try {
    const response = yield call(getListMovieRequestApi);
    if (response) {
      const { data } = response;
      yield put(getListMovieSuccess(data));
    }
  } catch (error) {
    console.log('error get list movie', error);
  }
}

export default function* movieSaga() {
  yield all([
    takeLatest(actions.getListMovieRequest.type, fetchListMovieRequestMid),
  ]);
}
