import { createContext } from "react";

const StateContext = createContext({
  stateModal: null,
  setStateModal: () => {},
});

export default StateContext;
