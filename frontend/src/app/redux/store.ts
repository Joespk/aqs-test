import { configureStore } from "@reduxjs/toolkit";
import activeLinkReducer from "./reducer/activeLinkReducer";

const store = configureStore({
  reducer: {
    activeLink: activeLinkReducer, // Add reducer to store
  },
});

export default store;
