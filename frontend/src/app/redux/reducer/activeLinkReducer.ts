"use client";

import { InitialState, SetActiveLinkAction } from "../types/types";

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

export default activeLinkReducer;
