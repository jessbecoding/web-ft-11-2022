import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PetSlice = createSlice({
  name: "favPets",
  initialState,
  reducers: {
    addFav: (state) => {},
    removeFav: (state) => {},
  },
});

export const { addFav, removeFav } = PetSlice.actions;

export default PetSlice.reducer;
