import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import apiSaga from "./apiSaga";

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "API_RESPONSE":
      debugger;
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(apiSaga);

export default store;
