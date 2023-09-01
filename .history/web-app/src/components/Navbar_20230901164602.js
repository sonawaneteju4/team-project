import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
    <a href="#home">About</a>
    <a href="#news">Search Blood</a>
    <div className="dropdown">
      <button className="dropbtn">BloodBank
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <a href="#">Blood Donnate</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  </div>
  
  );
};

export default Navbar;
