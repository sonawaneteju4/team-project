import React, { useEffect, useState } from "react";
import importedData from "./../json/states.json";
import { collection } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import  './Availablity.css';

const Availablity = () => {
 

  return (
    <div className="mainDiv">
      <div className="">
        <h2 style={{ textAlign: "center" }}>
          Search Blood Bank To Donate Blood{" "}
        </h2>

        <div className="phbdMain">
          <div className="phbd">
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
            <label htmlFor="">BloodGroup</label>
            <select name="bloodGroup" onChange={handleChange} id="" required>
              <option value="">Select Blood Group</option>
              <option value="A+ve">A+ve</option>
              <option value="A-ve">A-ve</option>
              <option value="B+ve">B+ve</option>
              <option selected value="B-ve">
                B-ve
              </option>
              <option value="O+ve">O+ve</option>
              <option value="O-ve">O-ve</option>
              <option value="AB+ve">AB+ve</option>
              <option value="AB-ve">AB-ve</option>
            </select>
          </div>
        </div>
        <div className="phbdbtn">
          <button className="button" onClick={HandleSearch}>
            Search Bank
          </button>
        </div>
        {bbData.length > 0 ? (
          <table>
            <tr>
              <td>Blood Bank Name</td>
              <td>Email</td>
              <td>Address</td>
              <td>City</td>
              <td>Contact</td>
              <td>Pin Code</td>
              <td>Category</td>
              <td>Blood Group</td>
              <td>Apheresis facility</td>
              <td>Component facility</td>
            </tr>
            {/* mapping start here  */}
            {bbData.map((item) => (
              <tr key={item.data().uId}>
                <td>
                  <p>{item.data().name}</p>
                </td>
                <td>
                  <p>{item.data().email}</p>
                </td>
                <td>
                  <p>{item.data().address}</p>
                </td>
                <td>
                  <p>{item.data().city}</p>
                </td>
                <td>
                  <p>{item.data().contact}</p>
                </td>
                <td>
                  <p>{item.data().pincode}</p>
                </td>
                <td>
                  <p>{item.data().category}</p>
                </td>
                <td>
                  <p>{item.data().apheresisfac}</p>
                </td>
                <td>
                  <p>{item.data().componentfac}</p>
                </td>
                <td>
                  <p>{item.data().bl}</p>
                </td>
              </tr>
            ))}
            {/* ends here */}
          </table>
        ) : (
          <h3 style={{ textAlign: "center" }}>Ooooops No Blood Bank Found !</h3>
        )}
      </div>
    </div>
  );
};

export default Availablity;
