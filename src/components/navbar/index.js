import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <div className="logo">LOGO</div>
      <div className="nav-links">
        <Link to="/">
          <div className="nav-link">Home</div>
        </Link>
        <Link to="/counter">
          <div className="nav-link">Counter</div>
        </Link>
        <div className="nav-link" onClick={() => navigate("/todo")}>
          Todo
        </div>
        <div className="nav-link" onClick={() => navigate("/mui")}>
          MUI
        </div>
      </div>
    </div>
  );
}

export default Navbar;
