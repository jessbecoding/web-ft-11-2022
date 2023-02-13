import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const addedNewMovie = state;
      addedNewMovie.push(action.payload);
      state = addedNewMovie;
    },
  },
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;
