// import { takeEvery, put } from 'redux-saga/effects';
// import { GET_EXAMPLE } from '../requests';
// import { loaderActions } from '../components/loader/loading-actions';


// function* showLoader(action) {
//   if (action.meta.loaderId) {
//     yield put(loaderActions.showLoader(action.meta.loaderId));
//   }
// }

// function* hideLoader(action) {
//   if (action.meta.loaderId) {
//     yield put(loaderActions.hideLoader(action.meta.loaderId));
//   }
// }

// export default function* loaderSaga() {
//   yield takeEvery(
//     [
//       GET_EXAMPLE.success,
//       GET_EXAMPLE.error
//     ],
//     hideLoader
//   );
//   yield takeEvery(
//     [
//       GET_EXAMPLE.pending,
//     ],
//     showLoader
//   );
// }
