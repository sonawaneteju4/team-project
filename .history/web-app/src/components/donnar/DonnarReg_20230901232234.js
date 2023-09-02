import React, { useState } from "react";

const DonnarReg = () => {
  const [regUser, setregUser] = useState({
    email: "",
    password: "",
    userType: "donnor",
    userName: "",
    age: "",
    weight: "",
    gender: "",
    mobile: "",
    aadhar: "",
    address: "",
    state: "",
    dist: "",
    pincode: "",
  });

  


  const handleChange = (e) =>{
    setregUser({
      ...regUser,[e.targert.name]: e.targert.value,
    })
  }
  return <div>DonnarReg</div>;
};

export default DonnarReg;
