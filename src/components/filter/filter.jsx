import "./filter.css";
import StateContext from "../../contexts/stateContext/stateContext";
import { useContext } from "react";

function Filter() {
  const { pageState, setPageState } = useContext(StateContext);

  const setSort = (sort) => {
    setPageState((prevPageState) => {
      return {
        ...prevPageState,
        sort,
      };
    });
  };

  const setSearch = (e) => {
    const {
      target: { value },
    } = e;
    setPageState((prevPageState) => {
      return {
        ...prevPageState,
        searchText: value,
      };
    });
  };

  return (
    <div className="toolbar">
      <div className="toolbar-btn-group">
        <button
          onClick={() => setSort("asc")}
          className={`toolbar-btn ${
            pageState.sort === "asc" ? "toolbar-btn-selected" : ""
          }`}
        >
          A to Z
        </button>
        <button
          onClick={() => setSort("desc")}
          className={`toolbar-btn ${
            pageState.sort === "desc" ? "toolbar-btn-selected" : ""
          }`}
        >
          Z to A
        </button>
        <button
          onClick={() => setSort("seen")}
          className={`toolbar-btn ${
            pageState.sort === "seen" ? "toolbar-btn-selected" : ""
          }`}
        >
          Visited
        </button>
        <button
          onClick={() => setSort("not")}
          className={`toolbar-btn ${
            pageState.sort === "not" ? "toolbar-btn-selected" : ""
          }`}
        >
          Coming Soon
        </button>
      </div>
      <input
        onChange={(e) => setSearch(e)}
        className="toolbar-search"
        type="text"
        placeholder="Search for a state"
      />
    </div>
  );
}

export default Filter;
