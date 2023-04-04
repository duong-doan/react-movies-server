// import { all, put, takeLatest, call } from 'redux-saga/effects';
// import {
//   getListMovieRequestApi,
//   getMovieInfoRequestApi,
//   getCommentsInMovieApi,
//   postCommentInMovieApi,
//   searchMoviesApi,
// } from 'services/movieService';
// import { getToken } from 'utils/hooks/useToken';
// import * as actions from './actions';
// import {
//   getListMovieSuccess,
//   updateLoading,
// } from './slice';

// function* fetchListMovieRequestMid(action) {
//   const page = action.payload;
//   try {
//     yield put(updateLoading(true));
//     const accessToken = getToken();
//     const response = yield call(getListMovieRequestApi, { page, accessToken });
//     if (response?.data?.moviesList) {
//       const data = response?.data?.moviesList;
//       yield put(getListMovieSuccess(data));
//     } else {
//       yield put(actions.getListMovieError(response.data.errors));
//     }
//   } catch (error) {
//     yield put(actions.getListMovieError(error));
//   }
// }

// export default function* movieSaga() {
//   yield all([
//     takeLatest(actions.getListMovieRequest.type, fetchListMovieRequestMid),
//   ]);
// }
