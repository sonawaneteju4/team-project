import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="div">
        <Link to="/">About</Link>
      </div>
      <div>
        <Link  href="#news">Search Blood</a>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          BloodBank
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link  href="#">Login</a>
          <Link  href="#">Register 2</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Hosptial
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link  href="#">Login</a>
          <Link  href="#">Register 2</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Donnor
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link  href="#">Login</a>
          <Link  href="#">Register 2</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
