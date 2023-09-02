import React, { useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const HospitalRegister = () => {
  const [regUser, setregUser] = useState({
    email: "",
    password: "",
    type: "",
    hospName: "",
    contact:" ",
    address:" ",
    pincode:" "
  });
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "hospInfo");
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
      const user = userCredential.user; // Get the user object from the userCredential
      localStorage.setItem('userId', user.uid);
    
      await addDoc(usersCollectionRef, {
        type: "donar",
        uId: user.uid,
        email: user.email,
      });
      await addDoc(usersDataRef, {
        uId: user.uid,
        hospName: regUser.userName,
        type: regUser.type,
        gender: regUser.gender,
        contact: regUser.contact,
        address: regUser.address,
        pincode: regUser.pincode,
      });
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
    <div>HospitalRegister</div>
    <div>

    <label htmlFor="">email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
     
      
      
  );
};

export default HospitalRegister