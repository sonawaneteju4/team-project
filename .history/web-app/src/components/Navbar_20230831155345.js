import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        {/* <a href='/aclka'>abc</a> */}
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/CreateUser'>CreateUser</Link>
    </div>
  )
}

export default Navbar