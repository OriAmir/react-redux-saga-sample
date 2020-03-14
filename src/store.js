import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from './saga';
import {main} from './reducers/main';
import {loading} from './components/loader/loading-reducer';
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
  main,
  loading,
  toastr: toastrReducer // <- Mounted at toastr.
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
