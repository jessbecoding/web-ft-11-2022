import React from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../reducers/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{counter}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
