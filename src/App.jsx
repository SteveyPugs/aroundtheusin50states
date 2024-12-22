import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import States from "./components/content/states";
import Filter from "./components/filter/filter";
import stateList from "../src/data/us-states.json";

function App() {
  const [selectedOrder, setSelectedOrder] = useState("asc");
  const [searchText, setSearchText] = useState("");
  const [stateModal, setStateModal] = useState(null);
  function setOrder(order) {
    setSelectedOrder(order);
  }
  function setSearch(event) {
    const {
      target: { value },
    } = event;
    setSearchText(value);
  }

  function openModal(code) {
    const modal = document.getElementById("stateModal");
    modal.style.display = "block";
    const { name } = stateList.find((s) => s.code === code);
    setStateModal(
      {
        stateName: name,
        stateText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      () => {
        console.log(stateModal);
      }
    );
  }

  function closeModal() {
    const modal = document.getElementById("stateModal");
    modal.style.display = "none";
  }

  return (
    <>
      <Navigation />
      <Filter
        order={selectedOrder}
        handleClick={setOrder}
        handleSearch={setSearch}
      />
      <States order={selectedOrder} search={searchText} openModal={openModal} />
      <div className="modal" id="stateModal">
        <div className="modal-header">
          <div className="modal-header-title">{stateModal?.stateName}</div>
          <div onClick={closeModal}>❌</div>
        </div>
        <div className="modal-body">{stateModal?.stateText}</div>
      </div>
    </>
  );
}

export default App;
