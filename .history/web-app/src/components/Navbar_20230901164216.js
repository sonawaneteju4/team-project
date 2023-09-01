import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <div>
          <Link to="/">About Us</Link>
          </div>
        </li>
        <li>
          <div>
          <Link to="/">Search Blood</Link>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>{" "}
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div>
            
          </div>
          <Link to="/">Donnor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
