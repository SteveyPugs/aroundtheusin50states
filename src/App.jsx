import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import States from "./components/content/states";
import Filter from "./components/filter/filter";

function App() {
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

  return (
    <>
      <Navigation />
      <Filter
        order={selectedOrder}
        handleClick={setOrder}
        handleSearch={setSearch}
      />
      <States order={selectedOrder} search={searchText} />
    </>
  );
}

export default App;
