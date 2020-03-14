import { takeEvery, call } from 'redux-saga/effects';
import {
  GET_EXAMPLE
} from '../requests';
import { toastr } from 'react-redux-toastr';

function* showSuccessToast({ meta: { toast } }) {
  if (toast) {
    yield call(() => {
      toastr.success(toast.title || 'Action success', toast.messageSuccess);
    });
  }
}

function* showErrorToast({ meta: { toast } }) {
  if (toast) {
    yield call(() => {
      toastr.error('Action failed', toast.messageError);
    });
  }
}

export default function* toastSaga() {
  yield takeEvery(
    [
      GET_EXAMPLE.success
    ],
    showSuccessToast
  );
  yield takeEvery(
    [
      GET_EXAMPLE.error
    ],
    showErrorToast
  );
}
