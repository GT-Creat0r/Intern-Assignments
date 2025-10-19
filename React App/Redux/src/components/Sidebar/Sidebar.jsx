import { useSelector } from "react-redux";
import '../Sidebar/Sidebar.css'

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2>Sidebar Menu</h2>
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
