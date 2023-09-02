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

  const register = async (e) => {
    try {
      console.log(regUser.email);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        regUser.email,
        regUser.password
      );
      const user = userCredential.user; // Get the user object from the userCredential

      const update = updateProfile(auth.currentUser, {
        displayName: regUser.USER,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
        phoneNumber: regUser.phoneNumber,
      });

      await addDoc(usersCollectionRef, {
        type: pageInfo,
        uId: user.uid,
        email: user.email,
      });

      console.log(user);
    } catch (error) {
      setErrorMessage(error.message);
      setmodalShow(true);
      console.log(error.message);
    }
  };


  const handleChange = (e) =>{
    setregUser({
      ...regUser,[e.targert.name]: e.targert.value,
    })
  }
  return <div>DonnarReg</div>;
};

export default DonnarReg;
