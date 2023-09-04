import React, { useState } from 'react'
import importedData from "./../../json/states.json";
const states = importedData.states;


const DonateBlood = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const handleStateChange = (event) => {
        const newState = event.target.value;
        setSelectedState(newState);
        setSelectedDistrict(""); // Reset the district when the state changes
      };
    
      const handleDistrictChange = (event) => {
        const newDistrict = event.target.value;
        setSelectedDistrict(newDistrict);
      };
  return (
    <div>
        <div>Serch Blood Bank To Donate Blood</div>
    </div>
  )
}

export default DonateBlood