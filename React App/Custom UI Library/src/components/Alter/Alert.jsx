import { useState } from "react";
import "./Alert.css";

const Alert = ({
  children,
  variant = "info",
  title,
  className = "",
  ...props
}) => {


  return (
    <div
      className={`alert alert-${variant} ${className}`}
      role="alert"
      {...props}
    >
      <div className="alert-content">
        {/* {title && <div className="alert-title">{title}</div>} */}
        <div className="alert-message">{children}</div>
      </div>
    </div>
  );
};
export default Alert;
