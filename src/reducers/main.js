import { GET_EXAMPLE } from '../requests';

export const main = (state = { counter: 0, data: null }, action)=>{
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 }
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 }
    case GET_EXAMPLE.success:
      return { ...state, data: action.payload.data }
    default:
      return state;
  }
}