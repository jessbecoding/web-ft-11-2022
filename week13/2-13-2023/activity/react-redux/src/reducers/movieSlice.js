import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    searchMovies: (state, action) => {
      return action.payload;
    },
    displayDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const { searchMovies, displayDetails } = movieSlice.actions;

export default movieSlice.reducer;
