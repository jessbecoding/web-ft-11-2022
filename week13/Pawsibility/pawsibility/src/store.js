import { configureStore } from "@reduxjs/toolkit";
import petReducer from "./reducers/PetSlice";
import shelterReducer from "./reducers/ShelterSlice";

export const store = configureStore({
  reducer: {
    pets: petReducer,
    shelter: shelterReducer,
  },
});
