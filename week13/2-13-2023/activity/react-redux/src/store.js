import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/reducers/counterSlice";
import movieReducer from "../src/reducers/movieSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: movieReducer,
  },
});
