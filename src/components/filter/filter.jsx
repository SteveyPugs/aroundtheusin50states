import PropTypes from "prop-types";
import "./filter.css";

function Filter(props) {
  const { order, handleClick, handleSearch } = props;

  return (
    <div className="toolbar">
      <div className="toolbar-btn-group">
        <button
          onClick={() => handleClick("asc")}
          className={`toolbar-btn ${
            order === "asc" ? "toolbar-btn-selected" : ""
          }`}
        >
          A to Z
        </button>
        <button
          onClick={() => handleClick("desc")}
          className={`toolbar-btn ${
            order === "desc" ? "toolbar-btn-selected" : ""
          }`}
        >
          Z to A
        </button>
        <button
          onClick={() => handleClick("seen")}
          className={`toolbar-btn ${
            order === "seen" ? "toolbar-btn-selected" : ""
          }`}
        >
          Visited
        </button>
        <button
          onClick={() => handleClick("not")}
          className={`toolbar-btn ${
            order === "not" ? "toolbar-btn-selected" : ""
          }`}
        >
          Non-Visited
        </button>
      </div>
      <input
        onChange={(e) => handleSearch(e)}
        className="toolbar-search"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

Filter.propTypes = {
  order: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Filter;
