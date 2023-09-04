import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import importedData from "./../../json/states.json";

const DonnarReg = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const states = importedData.states;

  const [regUser, setregUser] = useState({
    email: "",
    password: "",
    userType: "",
    userName: "",
    age: "",
    bloodGroup: "",
    weight: "",
    gender: "",
    mobile: "",
    aadhar: "",
    address: "",
    state: "",
    dist: "",
    pincode: "",
  });
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "donnarInfo");
  const navigate = useNavigate();
  console.log(regUser.state);

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
      dist: newDistrict,
    });
  };
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
      const update = updateProfile(auth.currentUser, {
        displayName: regUser.userName,
      });
      await addDoc(usersCollectionRef, {
        type: "donar",
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
        bloodGroup: regUser.bloodGroup,
        aadhar: regUser.aadhar,
        address: regUser.address,
        state: regUser.state,
        dist: regUser.dist,
        pincode: regUser.pincode,
      });
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  // https://firebase.google.com/docs/firestore/query-data/queries?hl=en&authuser=0&_gl=1*cebiw7*_ga*ODAxMjEzNzYuMTY5Mjg1NDU5NA..*_ga_CW55HF8NVT*MTY5MzU5MTQ5Ny4xNy4xLjE2OTM1OTMxOTYuMC4wLjA.

  return (
    <div className="bankReg">
      <div className="heading">DonarReg</div>

      <div className="formOfBank">
        <div className="formDiff">
          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">userName</label>
            <input type="text" name="userName" onChange={handleChange} />
          </div>
          <div className="statesAndDist">
            <div>
              <label htmlFor="">age</label>
              <input type="number" name="age" onChange={handleChange} />
            </div>

            <div className="distcss">
              <label htmlFor="">weight</label>
              <input type="number" name="weight" onChange={handleChange} />
            </div>
          </div>
          <div className="statesAndDist">
            <div>
              <label htmlFor="">bloodGroup</label>
              <input type="text" name="bloodGroup" onChange={handleChange} />
            </div>
            <div className="distcss">
              <label htmlFor="">gender</label>
              {/* <input type="text" name="gender"/> */}
              <select name="gender" onChange={handleChange} id="">
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="formDiff"></div>
      </div>

      <div>
        <label htmlFor="">mobile</label>
        <input type="number" name="mobile" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">aadhar</label>
        <input type="number" name="aadhar" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">address</label>
        <input type="text" name="address" onChange={handleChange} />
      </div>
      <div className="statesAndDist">
        <div>
          <label>Select a State:</label>
          <select onChange={handleStateChange} value={selectedState}>
            <option value="">Select a State</option>
            {states.map((stateData, index) => (
              <option key={index} value={stateData.state}>
                {stateData.state}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label>Select a District:</label>
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
      <div>
        <label htmlFor="">pincode</label>
        <input type="number" name="pincode" onChange={handleChange} />
      </div>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default DonnarReg;
