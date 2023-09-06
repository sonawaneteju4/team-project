import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import importedData from "./../../json/states.json";
import "./bankReg.css";

const BankRegister = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const states = importedData.states;

  const [regUser, setregUser] = useState({
    email: "",
    password: "",
    address: "",
    state: "",
    district: "",
    city: "",
    name: "",
    category: "",
    contact: "",
    pincode: "",
    componentfac: "",
    apheresisfac: "",
  });
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "bankInfo");
  const navigate = useNavigate();

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setregUser({
      ...regUser,
      state: newState,
    });
    setSelectedDistrict(""); // Reset the district when the state changes
  };

  const handleDistrictChange = (event) => {
    const newDistrict = event.target.value;
    setSelectedDistrict(newDistrict);
    setregUser({
      ...regUser,
      district: newDistrict,
    });
  };

  const handleChange = (e) => {
    setregUser({ ...regUser, [e.target.name]: e.target.value });
  };

  const register = async () => {
    if(regUser.category == ""){
      alert("select Something")
      
    }
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
        email: user.email,
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
    <div className="bankReg" onSubmit={register}>
      <div className="heading">Blood Bank Registration</div>
      <div className="formOfBank">
        <div  className="formDiff">
          <div className="">
            <label htmlFor="">email</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input type="password" name="password" onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="" >name</label>
            <input type="text" name="name" onChange={handleChange} required />
          </div>
          <div className="statesAndDist">
            <div>
              <label htmlFor="">contact</label>
              <input type="number" name="contact" onChange={handleChange} required />
            </div>
            <div className="distcss">
              <label htmlFor="">category</label>
              <select onChange={handleChange} name="category" required>
              <option selected disabled>Select</option>
                <option  value="Government">Government</option>
                <option  value="Private">Private</option>
                <option value="Charitable">Charitable</option>
                <option value="Private">Private</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="formDiff">
          <div>
            <label htmlFor="">address</label>
            <input type="text" name="address" onChange={handleChange} required />
          </div>
          <div className="statesAndDist">
            <div>
              <label>State</label>
              <select onChange={handleStateChange} value={selectedState}>
                <option value="">Select State</option>
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
                <option value="">Select District</option>
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
          <div className="statesAndDist">
            <div>
              <label htmlFor="">Component Facility</label>
              <select onChange={handleChange} name="componentfac" required>
              <option selected disabled>Select</option>
                <option  value="Yes">Yes</option>

                <option value="No">No</option>
              </select>
            </div>
            <div className="distcss">
              <label htmlFor="">Apheresis Facility</label>
              <select onChange={handleChange} name="componentfac" required>
              <option selected disabled>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="regBtn">
        <button className="button" onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
};

export default BankRegister;
