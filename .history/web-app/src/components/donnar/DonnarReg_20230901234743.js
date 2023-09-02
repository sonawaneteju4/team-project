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
    } catch (error) {
      alert(error.message)
    }
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
        <label htmlFor="">email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">userName</label>
        <input type="userName" name="userName" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">age</label>
        <input type="age" name="age" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">weight</label>
        <input type="weight" name="weight" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">gender</label>
        <input type="gender" name="gender" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">mobile</label>
        <input type="mobile" name="mobile" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">aadhar</label>
        <input type="aadhar" name="aadhar" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">address</label>
        <input type="text" name="address" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="state">state</label>
        <input type="text" name="state" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="dist">dist</label>
        <input type="text" name="dist" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="pincode">pincode</label>
        <input type="number" name="pincode" onChange={handleChange} />
      </div>
      <button onClick={register}>
        Register
      </button>
    </div>
  );
};

export default DonnarReg;
