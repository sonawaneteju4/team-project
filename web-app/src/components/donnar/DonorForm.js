import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import importedData from "./../../json/states.json";
import { useNavigate } from "react-router-dom";

const DonorForm = () => {
  const [regUser, setregUser] = useState({
    email: "",
    userName: "",
    age: "",
    dateofdonation: " ",
    dateofbirth: " ",
    bloodGroup: "",
    type: "",
    weight: "",
    gender: "",
    contact: "",
    aadhar: "",
    address: "",
    state: "",
    dist: "",
    city: " ",
    pincode: "",
  });
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "donorForm");
  const navigate = useNavigate();
  console.log(regUser.state);
  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setregUser({
      ...regUser,
      state: newState,
    });
    setSelectedDistrict("");
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

  const donor = async () => {
    await addDoc(usersDataRef, {
      email: regUser.email,
      userName: regUser.userName,
      dateofdonation: regUser.dateofdonation,
      dateofbirth: regUser.dateofbirth,
      age: regUser.age,
      weight: regUser.weight,
      gender: regUser.gender,
      mobile: regUser.mobile,
      bloodGroup: regUser.bloodGroup,
      type: regUser.type,
      aadhar: regUser.aadhar,
      address: regUser.address,
      city: regUser.city,
      state: regUser.state,
      dist: regUser.dist,
      pincode: regUser.pincode,
    });
    navigate("/");
  };
return (
  <div className="bankReg">
    <div className="heading">Donor Registration</div>

    <div className="formOfBank">
      <div className="formDiff">
        <div>
          <label htmlFor="">Date Of Donation</label>
          <input type="date" name="dateofdonation" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" name="userName" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Date Of Birth</label>
          <input type="date" name="dateofbirth" onChange={handleChange} />
        </div>
        <div className="statesAndDist">
          <div>
            <label htmlFor="">Age</label>
            <input type="number" name="age" onChange={handleChange} />
          </div>

          <div className="distcss">
            <label htmlFor="">weight</label>
            <input type="number" name="weight" onChange={handleChange} />
          </div>
        </div>
        <div className="statesAndDist">
          <div>
            <label htmlFor="">BloodGroup</label>
            <input type="text" name="bloodGroup" onChange={handleChange} />
          </div>

          <div className="distcss">
            <label htmlFor="">Type</label>
            {/* <input type="text" name="gender"/> */}
            <select name="type" onChange={handleChange} id="">
              <option value="wholeblood">Whole Blood</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className="distcss">
            <label htmlFor="">Gender</label>
            {/* <input type="text" name="gender"/> */}
            <select name="gender" onChange={handleChange} id="">
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
        </div>
      </div>
      <div className="formDiff">
        <div>
          <label htmlFor="">Contact Number</label>
          <input type="number" name="mobile" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Aadhar number</label>
          <input type="number" name="aadhar" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input type="text" name="address" onChange={handleChange} />
        </div>
        <div className="statesAndDist">
          <div>
            <label>State:</label>
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
        <div>
          <label htmlFor="">Pincode</label>
          <input type="number" name="pincode" onChange={handleChange} />
        </div>
      </div>
    </div>

    <div className="regBtn">
      <button className="button" onClick={register}>
        Submit
      </button>
    </div>
  </div>
);
                }
export default DonorForm;
