import { useContext, useRef, useEffect } from "react";
import StateContext from "../../../contexts/stateContext/stateContext";
import "./stateModal.css";

function StateModal() {
  const { pageState, setPageState } = useContext(StateContext);

  function closeModal() {
    const modal = document.getElementById("stateModal");
    modal.style.display = "none";
    setPageState((prevPageState) => ({
      ...prevPageState,
      currentStateModal: {
        stateName: null,
        stateVisits: [],
      },
    }));
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
          <div className="modal-header-content">
            {pageState?.currentStateModal.stateCode && (
              <img
                src={`./us-flags/${pageState.currentStateModal.stateCode.toLowerCase()}.png`}
                className="modal-flag"
                alt={`${pageState.currentStateModal.stateName} flag`}
              />
            )}
            <div className="modal-header-title">
              {pageState?.currentStateModal.stateName}
            </div>
          </div>
          <div onClick={closeModal}>❌</div>
        </div>
        <div className="modal-body">
          Areas Visited: {pageState?.currentStateModal.stateVisits.sort().join(", ")}
        </div>
      </div>
    </div>
  );
}

export default StateModal;
