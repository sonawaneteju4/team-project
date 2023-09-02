import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const HospitalRegister = () => {
  const [regUser, setregUser] = useState({
    email: "",
    password: "",
    type: "",
    hospName: "",
    contact: " ",
    address: " ",
    pincode: " ",
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
      localStorage.setItem("userId", user.uid);

      await addDoc(usersCollectionRef, {
        type: "hospital",
        uId: user.uid,
        email: user.email,
      });
      await addDoc(usersDataRef, {
        uId: user.uid,
        hospName: regUser.hospName,
        type: regUser.type,
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
    <>
    <div className="hospital">
      <div>Hospital Register</div>

      <div>
        <label htmlFor="">email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">hospName</label>
        <input type="text" name="hospName" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">type</label>
        <input type="type" name="type" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">contact</label>
        <input type="number" name="contact" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">address</label>
        <input type="text" name="address" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">pincode</label>
        <input type="pincode" name="pincode" onChange={handleChange} />
      </div>
      <button onClick={register}>Register</button>
      </div>
    </>
  );
};

export default HospitalRegister;
