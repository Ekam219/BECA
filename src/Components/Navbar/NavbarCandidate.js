import React from "react";
import "./NavbarCandidate.scss";
import logo from "./logo-fotor-bg-remover-2024062404828.png";
import { FaSearch, FaUserAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBarCandidate({ setKeyword }) {
  function handleSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="center">
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search scholarships, Keywords or Institutions"
            onChange={handleSearch}
          />
          <button><FaSearch /></button>
        </div>
      </div>
      <div className="right">
        <Link to="/registerseeker">Scholarship Search</Link>
        <a href="#employer">Institutions</a>
        <Link to="/candidate">Messages</Link>

        <div className="icon-button">
          <FaEnvelope />
        </div>
        <div className="profile">
          <Link to="/profile"><FaUserAlt /></Link>
        </div>
      </div>
    </div>
  );
}

export default NavBarCandidate;
