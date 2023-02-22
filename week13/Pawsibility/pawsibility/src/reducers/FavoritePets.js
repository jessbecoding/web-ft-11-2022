import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const FavoritePets = createSlice({
  name: "favPets",
  initialState,
  reducers: {
    addFav: (state, action) => {
      console.log("Added favorite!");
      return [...state, action.payload];
    },
    removeFav: (state, action) => {
      console.log("Removed Favorite");
      console.log("This is the action:", action);
      return state.filter((pet) => pet.id !== action.payload.id);
    },
  },
});

export const { addFav, removeFav } = FavoritePets.actions;

export default FavoritePets.reducer;
