import React from "react";
import "./NavBar.scss";
import logo from "./logo-fotor-bg-remover-2024062404828.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <img src={logo} alt="BECA Scholarships" />
        </Link>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <a href="#about">About Us</a>
        <Link to="/registerseeker">Scholarship Search</Link>
        <a href="#employer">Institutions</a>
        <a href="#contact">Contact Us</a>
      </div>
    </div>
  );
}

export default NavBar;
