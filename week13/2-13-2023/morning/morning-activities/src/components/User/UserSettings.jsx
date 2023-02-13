import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../../reducers/counterSlice";

const UserSettings = () => {
  const counter = useSelector((state) => state.counter.value);
  const userLoggedIn = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Adjust your settings here.</h1>
      <h2>The counter is at: {counter}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(7))}>
        Increment by 7
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <h2>User that is logged in is: {userLoggedIn.name}</h2>
      UserSettings
    </div>
  );
};

export default UserSettings;
