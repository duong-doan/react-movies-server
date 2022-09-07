import { all, put, takeLatest, call } from 'redux-saga/effects';
import { getListMovieRequestApi } from 'services/movieService';
import * as actions from './actions';
import { getListMovieSuccess } from './slice';

function* fetchListMovieRequestMid() {
  console.log('goi get list');
  try {
    const response = yield call(getListMovieRequestApi);
    console.log('response', response);
    if (response) {
      const data = response?.data?.moviesList;
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
