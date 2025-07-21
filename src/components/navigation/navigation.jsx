import "./navigation.css";
import states from "../../data/us-states.json";

function Navigation() {
  const visitedCount = states.filter(state => state.visited).length;
  const totalCount = states.length;
  const percentage = Math.round((visitedCount / totalCount) * 100);

  return (
    <div className="nav-wrapper">
      <div className="nav-left">Around The USA in 50 States</div>
      <div className="nav-right">
        <div className="nav-stats">
          <span className="visited-count">{visitedCount}/{totalCount}</span>
          <span className="visited-percentage">({percentage}%)</span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
