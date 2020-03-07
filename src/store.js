import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
// import apiSaga from "./saga/apiSaga";
import rootSaga from './saga';
import { GET_EXAMPLE } from './actions';

function main(state = { counter: 0, data: null }, action) {
  debugger;
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 }
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 }
    case GET_EXAMPLE.success:
      debugger;
      return { ...state, data: action.payload.data }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  main
});


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
