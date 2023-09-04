import React from 'react'
import importedData from "./../../json/states.json";


const DonateBlood = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
  return (
    <div>
        <div>Serch Blood Bank To Donate Blood</div>
    </div>
  )
}

export default DonateBlood