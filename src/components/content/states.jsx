import "./states.css";
import states from "../../data/us-states.json";
import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import StateContext from "../contexts/states/states";

function States(props) {
  const { setStateModal } = useContext(StateContext);

  const [stateList, setStateList] = useState([...states]);
  const { order, search } = props;

  useEffect(() => {
    let statesSorted = [...states];
    if (search.length > 0) {
      statesSorted = statesSorted.filter((ss) =>
        ss.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    statesSorted = statesSorted.sort((a, b) => {
      if (order === "asc") {
        return a.name.localeCompare(b.name);
      }
      if (order === "desc") {
        return b.name.localeCompare(a.name);
      }
      if (order === "seen") {
        return Number(b.visited) - Number(a.visited);
      }
      if (order === "not") {
        return Number(a.visited) - Number(b.visited);
      }
    });
    setStateList(statesSorted);
  }, [order, search]);

  const openModal = (code) => {
    const { name, locations } = states.find((s) => s.code === code);
    setStateModal({
      stateName: name,
      stateVisits: locations,
    });
    const modal = document.getElementById("stateModal");
    modal.style.display = "block";
  };

  return (
    <div className="state-content">
      {stateList.map((state) => {
        return (
          <div key={state.code} className="state-item">
            <div className="state-wrapper">
              <img
                src={`./us-flags/${state.code.toLowerCase()}.png`}
                className="state-flag"
              />
              <p className="state-name">{state.name.toUpperCase()}</p>
              <p
                className="state-status"
                onClick={state.visited ? () => openModal(state.code) : null}
              >
                Visited {state.visited ? "✅" : "❌"}{" "}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

States.propTypes = {
  order: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

export default States;
