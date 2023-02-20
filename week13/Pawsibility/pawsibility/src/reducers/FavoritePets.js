import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const FavoritePets = createSlice({
  name: "favPets",
  initialState,
  reducers: {
    addFav: (state, action) => {
      return [...state, action.payload];
    },
    removeFav: (state, action) => {
      console.log("made it");
      return [...state.splice(0, action.payload)];
    },
  },
});

export const { addFav, removeFav } = FavoritePets.actions;

export default FavoritePets.reducer;
