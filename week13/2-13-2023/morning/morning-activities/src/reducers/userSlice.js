import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "Joe",
    settings: "dark mode",
    address: "123 main st",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUsername: (state) => {
      state.value.name = "Veronica";
    },
    changeUserSettingsLightMode: (state) => {
      state.value.settings = "light mode";
    },
    changeUserSettingsDarkMode: (state) => {
      state.value.settings = "dark mode";
    },
  },
});

export const {
  changeUsername,
  changeUserSettingsLightMode,
  changeUserSettingsDarkMode,
} = userSlice.actions;

export default userSlice.actions.reducer;
