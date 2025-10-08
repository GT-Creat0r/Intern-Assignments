export const validationRules = {
  name: {
    required: "Name is required",
    pattern: {
      value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
      message: "Name must contain only letters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
      message:
        "At least 8 chars, include uppercase, lowercase, number & special char",
    },
  },
};
