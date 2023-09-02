import React, { useState } from 'react'

const DonnarReg = () => {
  const [regUser, setregUser] = useState({email:"", password:"", userType:"donnor", userName :"" ,age:"", weight: "" ,gender: "", mobile: "", addhar:"", state:"" , dist});
  return (
    <div>DonnarReg</div>
  )
}

export default DonnarReg