import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "../../hooks/useForm";
import { validationRules } from "../../utils/validationRules";
import "../RegistrationForm.jsx/styles.css"

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useForm(
    { name: "", email: "", password: "" },
    validationRules
  );

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("formEntries")) || [];
    const updatedData = [...storedData, data];
    localStorage.setItem("formEntries", JSON.stringify(updatedData));

    console.log("Form submitted:", data);
    alert("Registration Successful!");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <h2>Registration Form</h2>
      {/* Name */}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="form-group password-group">
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange}
            className={errors.password ? "error" : ""}
          />
          <span
            className="icon"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEye /> :  <FaEyeSlash />}
          </span>
        </div>
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
