import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PetSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    addFav: (state) => {},
    removeFav: (state) => {},
    searchPets: (state, action) => {
      return action.payload;
    },
  },
});

export const { addFav, removeFav, searchPets } = PetSlice.actions;

export default PetSlice.reducer;
