import "../Button/Button.css";
const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) => {
  const classNames = ["btn", `btn-${variant}`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
