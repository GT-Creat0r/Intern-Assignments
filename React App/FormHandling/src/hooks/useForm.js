import { useState } from "react";

export const useForm = (initialValues = {}, validationSchema = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // Validation logic
  const validate = () => {
    let tempErrors = {};

    for (const field in validationSchema) {
      const { required, pattern, message } = validationSchema[field];
      const value = values[field]?.trim();

      if (required && !value) {
        tempErrors[field] = `${field} is required`;
      } else if (pattern && !pattern.value.test(value)) {
        tempErrors[field] = pattern.message || `${field} is invalid`;
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  //  Handle form submission
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      callback(values);
      setValues(initialValues);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};
