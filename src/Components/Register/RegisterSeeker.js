import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import "./Register.scss";
import axios from "axios";
import { useNavigate } from "react-router";
import image from "./20547283_6310507.jpg";
import { Link } from "react-router-dom";

function RegisterSeeker() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    resume: null,
  });

  // Function to handle form input changes
  const setHandler = (event) => {
    if (event.target.name === "resume") {
      // Handle file upload separately
      setFormData({ ...formData, [event.target.name]: event.target.files[0] });
    } else {
      // Handle other input changes
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  // Function to handle form submission
  const submitHandler = async (event) => {
    event.preventDefault();

    const { password, confirm_password } = formData;

    if (password !== confirm_password) {
      alert("Password and Confirm Password should be the same");
    } else {
      try {
        // Simulated API call
        // const response = await axios.post("http://localhost:1000/", formData);
        console.log("Registration successful!");
        navigate('/login');
      } catch (error) {
        console.error("Error registering:", error);
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="page">
        <div><h2>Unlock Your Potential. Register with Us!</h2></div>
        <div className="content-wrapper">
          <div className="RegisterSeeker">
            <form onSubmit={submitHandler}>
              <Link to="/login"><p className="login">Already a user? LogIn</p></Link>
              <input type="text" onChange={setHandler} name="name" placeholder="Name" required />
              <input type="email" onChange={setHandler} name="email" placeholder="Email" required />
              <input type="password" onChange={setHandler} name="password" placeholder="Password" required />
              <input type="password" onChange={setHandler} name="confirm_password" placeholder="Confirm Password" required />
              <label>Upload Your Resume</label>
              <input type="file" onChange={setHandler} name="resume" />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="image">
            <img src={image} alt="Registration Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterSeeker;
