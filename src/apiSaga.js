import { takeEvery, put } from "redux-saga/effects";
import { createAction } from "redux-actions";

function* fetchData() {
  debugger;
  yield put(createAction("API_RESPONSE"));
}

export default function* apiSaga() {
  yield takeEvery("API_REQUEST", fetchData);
}
