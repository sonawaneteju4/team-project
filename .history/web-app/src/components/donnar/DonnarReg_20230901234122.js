import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const DonnarReg = () => {
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "donnarInfo");
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

  const register = async () => {
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
      await addDoc(usersCollectionRef, {
        type: "donnar",
        uId: user.uid,
        email: user.email,
      });

      await addDoc(usersDataRef, {
        uId: user.uid,
        userName: regUser.userName,
        age: regUser.age,
        weight: regUser.weight,
        gender: regUser.gender,
        mobile: regUser.mobile,
        aadhar: regUser.aadhar,
        address: regUser.address,
        state: regUser.state,
        dist: regUser.dist,
        pincode: regUser.pincode,
      });
    } catch (error) {}
  };

  const handleChange = (e) => {
    setregUser({
      ...regUser,
      [e.targert.name]: e.targert.value,
    });
  };
  return (
    <div>
      DonnarReg
      <div>
        <label htmlFor=""></label>
        <input type="text" name="" onChange={} />
      </div>
    </div>
  );
};

export default DonnarReg;
