import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <h1 className="logo">Restaurant OS</h1>

      <div className="profile" onClick={() => setOpen(!open)}>
        <div className="avatar">B</div>
        <span>Bibek</span>

        {open && (
          <div className="dropdown-menu">
            <button className="dropdown-item">My Account</button>
            <button className="dropdown-item">Profile</button>
            <button className="dropdown-item">Settings</button>
            <button className="dropdown-item logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
