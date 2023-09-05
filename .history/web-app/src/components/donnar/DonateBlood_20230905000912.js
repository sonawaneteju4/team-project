import React, { useState } from "react";
import importedData from "./../../json/states.json";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./table.css";
const states = importedData.states;

const DonateBlood = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [bbData, setbbData] = useState([]);
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
  const SerchBankQ = query(
    BankDataRef,
    where("state", "==", selectedState),
    where("district", "==", selectedDistrict)
  );

  const HandleSearch = async () => {
    try {
      const data = await getDocs(SerchBankQ);
      console.log(data);
      setbbData(data.docs);
      // data.forEach((item) => {
      //     console.log(item.data());
      //   });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Serch Blood Bank To Donate Blood</h2>
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
      </div>
      <div className="phbdbtn">
        <button className="button" onClick={HandleSearch}>
          Search Bank
        </button>
      </div>
      {b(<table>
        <tr>
          <td>Blood Bank Name</td>
          <td>Email</td>
          <td>Address</td>
          <td>City</td>
          <td>Contact</td>
          <td>Pin Code</td>
          <td>Category</td>
          <td>apheresisfac</td>
          <td>componentfac</td>
          <td>Donate Blood</td>
        </tr>
        {bbData.map((item, index) => (
          <tr>
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
              <button>Donate Blood Request</button>
            </td>
          </tr>
        ))}
      </table>)}
    </div>
  );
};

export default DonateBlood;