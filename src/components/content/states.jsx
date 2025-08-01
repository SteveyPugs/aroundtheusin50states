import "./states.css";
import states from "../../data/us-states.json";
import { useState, useEffect, useContext } from "react";
import StateContext from "../../contexts/stateContext/stateContext";

function States() {
  const { pageState, setPageState } = useContext(StateContext);

  const [stateList, setStateList] = useState([...states]);

  useEffect(() => {
    let statesSorted = [...states];
    if (pageState?.searchText.length > 0) {
      statesSorted = statesSorted.filter((ss) =>
        ss.name.toLowerCase().includes(pageState.searchText.toLowerCase())
      );
    }
    statesSorted = statesSorted.sort((a, b) => {
      if (pageState?.sort === "asc") {
        return a.name.localeCompare(b.name);
      }
      if (pageState?.sort === "desc") {
        return b.name.localeCompare(a.name);
      }
      if (pageState?.sort === "seen") {
        return Number(b.visited) - Number(a.visited);
      }
      if (pageState?.sort === "not") {
        return Number(a.visited) - Number(b.visited);
      }
    });
    setStateList(statesSorted);
  }, [pageState?.sort, pageState?.searchText]);

  const openModal = (code) => {
    const { name, locations } = states.find((s) => s.code === code);
    setPageState((prevPageState) => {
      return {
        ...prevPageState,
        currentStateModal: {
          stateName: name,
          stateVisits: locations,
          stateCode: code,
        },
      };
    });
    const modal = document.getElementById("stateModal");
    modal.style.display = "block";
  };

  return (
    <div className="state-content">
      {stateList.map((state) => {
        return (
          <div 
            key={state.code} 
            className="state-item"
            onClick={state.visited && !pageState?.currentStateModal?.stateCode ? () => openModal(state.code) : null}
            style={{ cursor: state.visited && !pageState?.currentStateModal?.stateCode ? 'pointer' : 'default' }}
          >
            <div className="state-wrapper">
              <img
                src={`./us-flags/${state.code.toLowerCase()}.png`}
                className="state-flag"
                alt={`${state.name} state flag`}
              />
              <p className="state-name">{state.name.toUpperCase()}</p>
              <div
                className="state-status"
                data-visited={state.visited}
              >
                {state.visited ? "✓ Visited" : "Coming Soon"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default States;
