import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getExampleAction, incremntAction } from '../actions';

export const App = () => {
  const dispatch = useDispatch();
  const main = useSelector(({ main }) => main);
  debugger;
  return (
    <div className="App">
      the count is {main.counter}
      <button onClick={() => dispatch(incremntAction())}>
        INCREMENT COUNTER
      </button>
      <button onClick={() => dispatch(getExampleAction())}>API CALL with saga</button>
      {
        main.data  && <div>DATA:{JSON.stringify(main.data)}</div>
      }
    </div>
  );
};

export default App;
