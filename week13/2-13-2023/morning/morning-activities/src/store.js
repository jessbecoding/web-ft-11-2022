import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/reducers/counterSlice";
import userReducer from "../src/reducers/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
