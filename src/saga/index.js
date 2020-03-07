import apiSaga from './apiSaga';
// import loaderSaga from './loaderSsga';
import { fork } from 'redux-saga/effects';
// import toastSaga from './toastSaga';

export default function* rootSaga() {
  yield fork(apiSaga);
  // yield fork(loaderSaga);
  // yield fork(toastSaga);
  // yield fork(mixpanelSaga);
}
