import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import "./Login.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Replace "url" with your actual endpoint for login
      // const response = await axios.post("url", loginData);
      // Example navigate to candidate page on successful login
      navigate("/candidate");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="page">
        <div>
          <h2>Welcome Back! Log In</h2>
        </div>
        <div className="content-wrapper">
          <div className="RegisterSeeker">
            <form onSubmit={handleSubmit}>
              <Link to="/registerseeker">
                <p className="login">New User? Register</p>
              </Link>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Email"
                value={loginData.email}
                required
              />
              <input
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Password"
                value={loginData.password}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
