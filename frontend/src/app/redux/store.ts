import { configureStore } from "@reduxjs/toolkit";
import { InitialState, SetActiveLinkAction } from "./types";

const initialState: InitialState = {
  activeLink: window.location.pathname, // Set initial state from pathname
};

const activeLinkReducer = (
  state = initialState,
  action: SetActiveLinkAction | { type: string }
) => {
  switch (action.type) {
    case "setActiveLink":
      return { ...state, activeLink: (action as SetActiveLinkAction).payload }; // Type assertion for 'payload'
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    activeLink: activeLinkReducer, // Add reducer to store
  },
});

export default store;
