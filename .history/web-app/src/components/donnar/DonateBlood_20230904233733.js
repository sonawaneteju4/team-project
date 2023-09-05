import React, { useState } from "react";
import importedData from "./../../json/states.json";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
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
      <button onClick={HandleSearch}>Search Bank</button>
      {bbData.map((item, index) => (
        <div style={{ display: "flex" }} key={index}>
          <table>
            <tr>
              <thead>Blood Bank Name</thead>
              <thead>Email</thead>
              <thead>Address</thead>
              <thead>City</thead>
              <thead>Contact</thead>
              <thead>Pin Code</thead>
              <thead>Type</thead>
              <thead>apheresisfac</thead>
              <thead>componentfac</thead>
            </tr>
            <tr>
              <td>
          <p>{item.data().address}</p>

              </td>
              <td>

          <p>{item.data().address}</p>
              </td>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
          </table>
          <p>{item.data().name}</p>
          <p>{item.data().category}</p>
          <p>{item.data().city}</p>
          <p>{item.data().type}</p>
          <p>{item.data().email}</p>
          <p>{item.data().state}</p>
          <p>{item.data().district}</p>
          <p>{item.data().pincode}</p>
          <button>Donate Blood Request</button>
        </div>
      ))}
    </div>
  );
};

export default DonateBlood;
