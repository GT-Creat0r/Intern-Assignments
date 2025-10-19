import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../slices/sidebarSlice";
import "../ToggleButton/ToggleButton.css";

const ToggleButton = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <button
      className={`toggle-btn ${isOpen ? "shifted" : ""}`}
      onClick={() => dispatch(toggleSidebar())}
    >
      {isOpen ? "Close" : "Open"}
    </button>
  );
};

export default ToggleButton;
