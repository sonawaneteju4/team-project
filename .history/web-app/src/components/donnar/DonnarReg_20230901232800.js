import React, { useState } from "react";

const DonnarReg = () => {
  const usersCollectionRef = collection(db, "users");
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

  const register = async()=>{
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        regUser.email,
        regUser.password
      );
      const user = userCredential.user; // Get the user object from the userCredential

      const update = updateProfile(auth.currentUser, {
        displayName: regUser.userName,
      });
    } catch (error) {
      
    }
  }


  const handleChange = (e) =>{
    setregUser({
      ...regUser,[e.targert.name]: e.targert.value,
    })
  }
  return <div>DonnarReg</div>;
};

export default DonnarReg;
