import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ShelterSlice = createSlice({
  name: "favShelters",
  initialState,
  reducers: {
    addFav: (state) => {},
    removeFav: (state) => {},
  },
});
