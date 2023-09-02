import React, { useState } from 'react'

const DonnarReg = () => {
  const [regUser, setregUser] = useState({email:"", password:"", userType:"donnor", userName :"" ,age});
  return (
    <div>DonnarReg</div>
  )
}

export default DonnarReg