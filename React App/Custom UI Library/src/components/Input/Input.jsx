const Input = ({
  label,
  placeholder = "",
  className = "",
  id,
  type = "text",
  required = false,
}) => {
  const inputId = id || "";
  const classNames = ["input", className].filter(Boolean).join(" ");

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={classNames}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
