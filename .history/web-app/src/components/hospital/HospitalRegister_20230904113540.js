import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import importedData from "./../../json/states.json";
import "./HospitalRegister.css";

const HospitalRegister = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const states = importedData.states;

  const [regUser, setregUser] = useState({
    email: "",
    password: "",
    type: "",
    hospName: "",
    contact: " ",
    address: " ",
    state: " ",
    district: " ",
    city: " ",
    pincode: " ",
  });
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "hospInfo");
  const navigate = useNavigate();

  //for state and dist

  


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
        state: regUser.state,
        district: regUser.district,
        city: regUser.city,
        pincode: regUser.pincode,
      });
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
    <div className="hospReg">
      <div className="heading">Hospital Register</div>
      <div className="formOfBank">
        <div className="formDiff">
      <div className=" ">
        <label htmlFor="">Email </label>
        <input type="email" name="email" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="">Password </label>
        <input type="password" name="password" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="">Hospital Name</label>
        <input type="text" name="hospName" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="">Hospital Type</label>
        <input type="type" name="type" onChange={handleChange} />
      </div>
      </div>

      <div className="formDiff">
      <div>
        <label htmlFor="">Contact number</label>
        <input type="number" name="contact" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="">Address</label>
        <input type="text" name="address" onChange={handleChange} />
      </div>

      <div className="statesAndDist">
            <div>
              <label>State </label>
              <select onChange={handleStateChange} value={selectedState}>
                <option value="">Select a State</option>
                {states.map((stateData, index) => (
                  <option key={index} value={stateData.state}>
                    {stateData.state}
                  </option>
                ))}
              </select>
            </div>
            <div className="distcss">
              <label>District:</label>
              <select onChange={handleDistrictChange} value={selectedDistrict}>
                <option value="">Select a District</option>
                {states
                  .find((stateData) => stateData.state === selectedState)
                  ?.districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="statesAndDist">
            <div>
              <label htmlFor="">city</label>
              <input
                className=""
                type="text"
                name="city"
                onChange={handleChange}
              />
            </div>
            <div className="distcss">
              <label htmlFor="">pincode</label>
              <input
                className="pin"
                type="number"
                name="pincode"
                onChange={handleChange}
              />
            </div>
          </div>
      <div >
        <label htmlFor="">Pincode</label>
        <input type="pincode" name="pincode" onChange={handleChange} />
      </div>
      <div  className="regBtn">
      <button className="button" onClick={register}>Register</button>
      </div>
      </div>
      </div>
      </div>
    
    </>
  
  );
};

export default HospitalRegister;
