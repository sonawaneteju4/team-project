import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";

const BankRegister = () => {
  const [regUser, setregUser] = useState({
    email: " ",
    password: " ",
    address: " ",
    state: " ",
    district: " ",
    city: " ",
    name: " ",
    category: " ",
    contact: " ",
    pincode: " ",
    componentfac: " ",
    apheresisfac: " ",
  });
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "bankInfo");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setregUser({ ...regUser, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        regUser.email,
        regUser.password
      );
      const user = userCredential.user;
      localStorage.setItem("userId", user.uid);
      await addDoc(usersCollectionRef, {
        type: "bank",
        uId: user.uid,
        email: user.email,
      });
      await addDoc(usersDataRef, {
        uId: user.uid,
        email: regUser.email,
        password: regUser.password,
        address: regUser.address,
        state: regUser.state,
        district: regUser.district,
        city: regUser.city,
        name: regUser.name,
        category: regUser.category,
        contact: regUser.contact,
        pincode: regUser.pincode,
        componentfac: regUser.componentfac,
        apheresisfac: regUser.apheresisfac,
      });
      navigate("/bankDash");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div>BankReg</div>
      <div>
        <label style={{d}} htmlFor="">email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">address</label>
        <input type="text" name="address" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">state</label>
        <input type="text" name="state" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">district</label>
        <input type="text" name="district" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">city</label>
        <input type="text" name="city" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">category</label>
        <input type="text" name="category" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">contact</label>
        <input type="number" name="contact" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">componentfac</label>
        <input type="text" name="componentfac" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">apheresisfac</label>
        <input type="text" name="apheresisfac" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">pincode</label>
        <input type="number" name="pincode" onChange={handleChange} />
      </div>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default BankRegister;
