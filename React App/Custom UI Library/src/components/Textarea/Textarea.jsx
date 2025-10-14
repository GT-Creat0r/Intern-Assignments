const Textarea = ({
  label,
  className = "",
  id,
  rows = 4,
  placeholder,
  required = false,
}) => {
  const textareaId = id || "";
  const classNames = ["textarea", className].filter(Boolean).join(" ");

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={textareaId} className="input-label">
          {label}
          {required && <spna className="input-required">*</spna>}
        </label>
      )}
      <textarea
        id={textareaId}
        className={classNames}
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
