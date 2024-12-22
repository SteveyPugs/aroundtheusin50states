import "./navigation.css";

function Navigation() {
  return (
    <div className="nav-wrapper">
      <div className="nav-left">Around The USA in 50 States</div>
      <div className="nav-right">
        <div className="nav-item">
          <button>Story</button>
        </div>
        <div className="nav-item">
          <button>About Us</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
