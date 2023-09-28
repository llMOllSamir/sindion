import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./nav.slice";
import homeSlice from "./home.slice";

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    home: homeSlice,
  },
});
