import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
          <li><Link to='/'>About Us</Link></li>
          <li><Link to='/'>Search Blood/Link></li>
          <li><Link to='/'></Link></li>
          <li><Link to='/'></Link></li>
          <li><Link to='/'></Link></li>
        </ul>
    </div>
  )
}

export default Navbar