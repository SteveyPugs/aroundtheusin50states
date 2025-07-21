import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import States from "./components/content/states";

import StateContext from "./contexts/stateContext/stateContext";
import StateModal from "./components/modals/stateModal/stateModal";

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
    <div className="app-container">
      <Navigation />
      <StateContext.Provider value={value}>
        <div className="main-content">
          <States />
        </div>
        <StateModal />
      </StateContext.Provider>
    </div>
  );
}

export default App;
