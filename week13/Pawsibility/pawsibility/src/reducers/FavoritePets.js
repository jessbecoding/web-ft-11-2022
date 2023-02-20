import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const FavoritePets = createSlice({
  name: "favPets",
  initialState,
  reducers: {
    addFav: (state, action) => {
      console.log("got here");
      return [...state, action.payload];
    },
    removeFav: (state) => {},
  },
});

export const { addFav, removeFav } = FavoritePets.actions;

export default FavoritePets.reducer;
