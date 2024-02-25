"use client";

import { InitialState, SetActiveLinkAction } from "../types/types";

const getInitialActiveLink = () => {
  if (process.browser) {
    return window.location.pathname;
  } else {
    return "/";
  }
};

const initialState: InitialState = {
  activeLink: getInitialActiveLink(),
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
