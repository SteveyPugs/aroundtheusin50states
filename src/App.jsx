import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import States from "./components/content/states";
import Filter from "./components/filter/filter";
import StateContext from "../src/components/contexts/states/states";
import StateModal from "../src/modals/state/state";

function App() {
  const [stateModal, setStateModal] = useState(null);

  const [selectedOrder, setSelectedOrder] = useState("asc");
  const [searchText, setSearchText] = useState("");
  function setOrder(order) {
    setSelectedOrder(order);
  }
  function setSearch(event) {
    const {
      target: { value },
    } = event;
    setSearchText(value);
  }

  const value = { stateModal, setStateModal };

  return (
    <>
      <Navigation />
      <Filter
        order={selectedOrder}
        handleClick={setOrder}
        handleSearch={setSearch}
      />
      <StateContext.Provider value={value}>
        <States order={selectedOrder} search={searchText} />
        <StateModal />
      </StateContext.Provider>
    </>
  );
}

export default App;
