import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

const incremntAction = {
  type: "INCREMENT"
};

const apiAction = {
  type: "API_REQUEST"
};

export const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(({ counter }) => counter);

  return (
    <div className="App">
      the count is {counter}
      <button onClick={() => dispatch(incremntAction)}>
        INCREMENT COUNTER
      </button>
      <button onClick={() => dispatch(apiAction)}>API CALL</button>
    </div>
  );
};

export default App;
