import React, { useState } from 'react'
import importedData from "./../../json/states.json";
import { collection, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
const states = importedData.states;


const DonateBlood = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const BankDataRef = collection(db, "bankInfo");
    const handleStateChange = (event) => {
        const newState = event.target.value;
        setSelectedState(newState);
        setSelectedDistrict(""); // Reset the district when the state changes
      };
    
      const handleDistrictChange = (event) => {
        const newDistrict = event.target.value;
        setSelectedDistrict(newDistrict);
      };


    //Query For Handle Bank Search
    const SerchBankQ = query(BankDataRef, where("state", "==" , selectedState))

  return (
    <div>
        <div>Serch Blood Bank To Donate Blood</div>
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
      <div>{selectedState}</div>
      <div>{selectedDistrict}</div>
      <button>Search Bank</button>
    </div>
  )
}

export default DonateBlood