import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { createAction } from 'redux-actions';

const defaultNextType = {
  pending: 'REQUEST_PENDING',
  success: 'REQUEST_SUCCESS',
  error: 'REQUEST_ERROR'
};

function* fetchData(action) {
  const nextActionType = action.payload.nextActionType || defaultNextType;
  debugger;
  try {
    // const headers = authService.getHeaders(authorizationToken);
    yield put(createAction(nextActionType.pending, () => action, () => action.meta)());

    let reqObj = {
      method: action.payload.method,
      url: action.payload.url,
      // baseURL: API_BASE_URL
      // data: formData
    };
    if (action.payload.data) {
      reqObj.data = action.payload.data;
    }

    const fetchResult = yield axios(reqObj);
    yield put(createAction(nextActionType.success, () => fetchResult, () => action.meta)(fetchResult));
  } catch (e) {
    yield put(createAction(nextActionType.error, () => e, () => action.meta)(e));
  }
}

function* apiSaga() {
  yield takeEvery('API_REQUEST', fetchData);
}

export default apiSaga;
