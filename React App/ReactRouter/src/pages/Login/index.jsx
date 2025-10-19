import { Link, useNavigate } from "react-router-dom";
import "../Login/styles.css";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

// const username = "admin";
// const password = "abcdefgh";

const Login = () => {
  // const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      console.log("Login data received in mutationFn:", formData);
      await new Promise((r) => setTimeout(r, 3000));
      return { success: true };
    },
    onSuccess: (data) => {
      console.log("Login success:", data);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (data.username === username && data.password === password) {
    //   localStorage.setItem("isAuthenticated", "true");
    //   navigate("/dashboard");
    // }

    const formData = new FormData(e.target);
    const userData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    console.log("Submitting form:", userData);
    mutation.mutate(userData); // triggers the mutationFn
    e.target.reset();
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            // value={data.username}
            // onChange={(e) => setData({ ...data, username: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            // value={data.password}
            // onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
        <Link to="/">Go to Home</Link>
      </form>
    </div>
  );
};

export default Login;
