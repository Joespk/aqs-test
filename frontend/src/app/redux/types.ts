export interface RootState {
  activeLink: {
    activeLink: string;
  };
}

export interface InitialState {
  activeLink: string; // Type of activeLink state is a string
}

export interface SetActiveLinkAction {
  type: "setActiveLink";
  payload: string;
}
