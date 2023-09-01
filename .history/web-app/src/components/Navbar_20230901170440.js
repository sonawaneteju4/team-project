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
        <Link  to="#news">Search Blood</Link >
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          BloodBank
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link  to="/login" loginFor={"Blp"} >Login</Link >
          <Link  to="#">Register 2</Link >
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Hosptial
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link  to="#">Login</Link >
          <Link  to="#">Register 2</Link >
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Donnar
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link  to="#">Login</Link >
          <Link  to="#">Register 2</Link >
        </div>
      </div>
    </div>
  );
};

export default Navbar;
