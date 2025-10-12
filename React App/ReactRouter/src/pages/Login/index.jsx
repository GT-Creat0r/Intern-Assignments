import { useNavigate } from "react-router-dom";
import "../Login/styles.css";
import { useState } from "react";

const username ="admin";
const password ="abcdefgh";

const Login = () => {
  const [data,setData] = useState({username:"",password:""});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(data.username === username && data.password===password){
      localStorage.setItem("isAuthenticated","true");
      navigate("/dashboard");
    }
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
            value={data.username}
            onChange={(e)=> setData({...data,username:e.target.value})}
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
            value={data.password}
            onChange={(e)=>setData({...data,password:e.target.value})}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
