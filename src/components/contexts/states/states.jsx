import { createContext } from "react";

const StateContext = createContext({
  pageState: null,
  setPageState: () => {},
});

export default StateContext;
