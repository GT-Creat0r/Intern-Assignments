import ReactDom from "react-dom";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-styles" />
      <div className="modal" onClick={()=>console.log("clicked")}>
        {children}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
