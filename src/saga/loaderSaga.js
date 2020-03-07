import { takeEvery, put } from 'redux-saga/effects';
import {
  SEND_CONTACT_US_MAIL,
} from '../constants/requests';
import { actions as loaderActions } from '../components/Common/Loader';

function* showLoader(action) {
  if (action.meta.loaderId) {
    yield put(loaderActions.showLoader(action.meta.loaderId));
  }
}

function* hideLoader(action) {
  if (action.meta.loaderId) {
    yield put(loaderActions.hideLoader(action.meta.loaderId));
  }
}

export default function* loaderSaga() {
  yield takeEvery(
    [
      SEND_CONTACT_US_MAIL.success,
    ],
    hideLoader
  );
  yield takeEvery(
    [
      SEND_CONTACT_US_MAIL.pending,
    ],
    showLoader
  );
}
