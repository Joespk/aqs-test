import { configureStore } from "@reduxjs/toolkit";
import activeLinkReducer from "./reducer/activeLinkReducer";

const store = configureStore({
  reducer: {
    activeLink: activeLinkReducer,
  },
});

export default store;
