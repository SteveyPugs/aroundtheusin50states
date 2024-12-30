import { useContext, useRef, useEffect } from "react";
import StateContext from "../../components/contexts/states/states";
import "./state.css";

function StateModal() {
  const { stateModal } = useContext(StateContext);

  function closeModal() {
    const modal = document.getElementById("stateModal");
    modal.style.display = "none";
  }
  const useClickOutside = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, [callback, ref]);

    return ref;
  };
  const divRef = useClickOutside(closeModal);

  return (
    <div ref={divRef}>
      <div className="modal" id="stateModal">
        <div className="modal-header">
          <div className="modal-header-title">{stateModal?.stateName}</div>
          <div onClick={closeModal}>❌</div>
        </div>
        <div className="modal-body">
          Areas Visited: {stateModal?.stateVisits.join(", ")}
        </div>
      </div>
    </div>
  );
}

export default StateModal;
