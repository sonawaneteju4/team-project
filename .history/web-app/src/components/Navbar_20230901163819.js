import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul>
          <li><Link to='/'>About Us</Link></li>
          <li><Link to='/'>Search Blood</Link></li>
          <li><Link to='/'>Blood Bank</Link></li>
          <li><Link to='/'>Hospital</Link></li>
          <li><Link to='/'>Donnor</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar