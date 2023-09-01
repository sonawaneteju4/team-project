import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="div">
        <L href="#home">About</L>
      </div>
      <div>
        <a href="#news">Search Blood</a>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          BloodBank
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Login</a>
          <a href="#">Register 2</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Hosptial
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Login</a>
          <a href="#">Register 2</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Donnor
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Login</a>
          <a href="#">Register 2</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
