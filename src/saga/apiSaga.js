import { put, takeEvery,delay } from 'redux-saga/effects';
import axios from 'axios';
import { addLoader, removeLoader } from '../components/loader/loading-actions';

const defaultNextType = {
  pending: 'REQUEST_PENDING',
  success: 'REQUEST_SUCCESS',
  error: 'REQUEST_ERROR'
};

function* fetchData(action) {
  const nextActionType = action.payload.nextActionType || defaultNextType;
  const loaderId = nextActionType.pending.replace('_PENDING', '');
  try {
    // const headers = authService.getHeaders(authorizationToken);
    yield put({type:nextActionType.pending,meta:action.meta});
    if (action.meta && action.meta.hasLoader) {
      yield put(addLoader(loaderId));
    }
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
    yield delay(5000)

    yield put({type:nextActionType.success,payload:fetchResult,meta:action.meta});
    yield put(removeLoader(loaderId));
  } catch (e) {
    yield put(removeLoader(loaderId));
    yield put({type:nextActionType.error,payload:e,meta:action.meta});
  }
}

function* apiSaga() {
  yield takeEvery('API_REQUEST', fetchData);
}

export default apiSaga;
