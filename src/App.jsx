import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import States from "./components/content/states";

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
      <div className="toolbar">
        {/* <p className="toolbar-text">Sort and Search</p> */}
        <div className="toolbar-btn-group">
          <button
            onClick={() => setOrder("asc")}
            className={`toolbar-btn ${
              selectedOrder === "asc" ? "toolbar-btn-selected" : ""
            }`}
          >
            A to Z
          </button>
          <button
            onClick={() => setOrder("desc")}
            className={`toolbar-btn ${
              selectedOrder === "desc" ? "toolbar-btn-selected" : ""
            }`}
          >
            Z to A
          </button>
          <button
            onClick={() => setOrder("seen")}
            className={`toolbar-btn ${
              selectedOrder === "seen" ? "toolbar-btn-selected" : ""
            }`}
          >
            Visited
          </button>
          <button
            onClick={() => setOrder("not")}
            className={`toolbar-btn ${
              selectedOrder === "not" ? "toolbar-btn-selected" : ""
            }`}
          >
            Non-Visited
          </button>
        </div>
        <input
          onChange={(e) => setSearch(e)}
          className="toolbar-search"
          type="text"
          placeholder="Search..."
        />
      </div>
      <States order={selectedOrder} search={searchText} />
    </>
  );
}

export default App;
