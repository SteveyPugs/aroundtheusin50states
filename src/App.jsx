import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import States from "./components/content/states";
import Filter from "./components/filter/filter";
import StateContext from "../src/components/contexts/states/states";
import StateModal from "./modals/state/stateModal";

function App() {
  const [pageState, setPageState] = useState({
    sort: "asc",
    searchText: "",
    currentStateModal: {
      stateName: null,
      stateVisits: [],
    },
  });

  const value = { pageState, setPageState };

  return (
    <>
      <Navigation />
      <StateContext.Provider value={value}>
        <Filter />
        <States />
        <StateModal />
      </StateContext.Provider>
    </>
  );
}

export default App;
