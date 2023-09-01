import React from 'react'
import { Link } from 'react-router-dom'
import ''

const Navbar = () => {
  return (
    <div>
        <ul>
          <li><Link to='/'>About Us</Link></li>
          <li><Link to='/'>Search Blood</Link></li>
          <li><Link to='/'>Blood Bank</Link></li>
          <li><Link to='/'>Hospital</Link></li>
          <li><Link to='/'>Donnor</Link></li>
        </ul>
    </div>
  )
}

export default Navbar