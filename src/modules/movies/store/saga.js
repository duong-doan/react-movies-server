import { all, put, takeLatest, call } from 'redux-saga/effects';
import { getListMovieRequestApi } from 'services/movieService';
import * as actions from './actions';
import { getListMovieSuccess, updateLoading } from './slice';

function* fetchListMovieRequestMid() {
  try {
    yield put(updateLoading(true));
    const response = yield call(getListMovieRequestApi);
    if (response) {
      const data = response?.data?.moviesList;
      yield put(getListMovieSuccess(data));
    }
  } catch (error) {
    yield put(actions.getListMovieError(error));
    console.log('error get list movie', error);
  }
}

export default function* movieSaga() {
  yield all([
    takeLatest(actions.getListMovieRequest.type, fetchListMovieRequestMid),
  ]);
}
