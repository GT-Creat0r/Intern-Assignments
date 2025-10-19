import { NavLink } from "react-router-dom";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/dashboard" end className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/menu" className="nav-link">
          Menu
        </NavLink>
        <NavLink to="/dashboard/orders" className="nav-link">
          Orders
        </NavLink>
        <NavLink to="/dashboard/reservations" className="nav-link">
          Reservations
        </NavLink>
        <NavLink to="/dashboard/settings" className="nav-link">
          Settings
        </NavLink>
        <NavLink to="/dashboard/staffs" className="nav-link">
          Staffs
        </NavLink>
        <NavLink to="/dashboard/customers" className="nav-link">
          Customers
        </NavLink>
        <NavLink to="/dashboard/analytics" className="nav-link">
          Analytics
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
