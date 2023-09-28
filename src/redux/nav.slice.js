import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "EN",
  isPageHome: true,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
    setPageHome: (state) => {
      state.isPageHome = !state.isPageHome;
    },
  },
});

export const { setLang, setPageHome } = navbarSlice.actions;

export default navbarSlice.reducer;
