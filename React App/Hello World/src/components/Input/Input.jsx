const Input = ({ label, placeholder,id }) => {
  return (
    <div>
      {label && <label for={id}>{label}</label>}
      <input id={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
