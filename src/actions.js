
import { GET_EXAMPLE } from './requests';
import axios from 'axios';

export const incremntAction = () => ({
  type: "INCREMENT"
})

// 1. An event occurs
// 2. An action is dispatched
// 3. Middleware receives the action
// 4. Reducer creates a new state from the change prescribed by the action
// 5. New state is passed into the React app via props

// So the benefit of using middleware like Redux Thunk is that components aren’t aware of how 
// action creators are implemented, and whether they care about Redux state, whether they are synchronous or asynchronous,
//  and whether or not they call other action creators. The downside is a little bit of indirection, but we believe it’s worth 
//  it in real applications.

// Finally, Redux Thunk and friends is just one possible approach to asynchronous requests in Redux apps.
//  Another interesting approach is Redux Saga which lets you define long-running daemons (“sagas”) that take
//   actions as they come, and transform or perform requests before outputting actions. This moves the logic from 
//   action creators into sagas. You might want to check it out, and later pick what suits you the most.

//Redux-thunk and Redux-saga are both middleware libraries for Redux. 
//Redux middleware is code that intercepts actions coming into the store via the dispatch() method.
//The idea is that a saga is similar to a separate thread in your application that’s solely responsible for side effects. However, unlike Redux-Thunk, which utilizes callback functions, a Redux-Saga thread can be started, paused and cancelled from the main application with normal Redux actions. Like Redux-Thunk,
// Redux-Saga has access to the full Redux application state and it can dispatch Redux actions as well.

//Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
//The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
//The inner function receives the store methods dispatch and getState as parameters.
export const getExampleActionThunk = () => {
  return function (dispatch) { 
    dispatch({
      type: GET_EXAMPLE.pending,
    })
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => dispatch({
        type: GET_EXAMPLE.success,
        data: response.data
      })).catch((response) => dispatch({
        type: GET_EXAMPLE.error,
        error: response.error
      }))
  }
}

export const getExampleAction = () => ({
  type: "API_REQUEST",
  payload: {
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/1",
    nextActionType: GET_EXAMPLE
  },
  meta: {
    hasLoader: true,
    toast:{
      title:"Title test",
      messageSuccess: "Get example success",
      messageError: "Get example error"
    }
  }
});