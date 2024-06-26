import React, { useState } from 'react'
import importedData from "./../json/states.json";
import { collection } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';


const Availablity = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedBloodType,setSelectedBloodType]=useState(" ");
    const [bbData, setbbData] = useState([]);
    const states = importedData.states;
        const BankDataRef = collection(db, "bankInfo");
        const navigate = useNavigate();
        const handleStateChange = (event) => {
          const newState = event.target.value;
          setSelectedState(newState);
          setSelectedDistrict(""); // Reset the district when the state changes
          setSelectedBloodType("");
        };
        const handleDistrictChange = (event) => {
            const newDistrict = event.target.value;
            setSelectedDistrict(newDistrict);
          };
          const handleBloodTypeChange=(event)=>{
            const newBloodType=event.target.value;
            setSelectedBloodType(newBloodType);

          }
          //Query For Handle Bank Search
          const SerchBankQ = query(
            BankDataRef,
            where("state", "==", selectedState),
            where("district", "==", selectedDistrict),
            // where("bloodGroup","==".selectedBloodType)
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
          const handleDonateBloodRequest = (bbId) => {
            navigate(`/healthHistory/${bbId}`);
          };
        
return (
    <>
    <div>
    <div>
    <h2 style={{ textAlign: "center" }}>Search Blood Bank To Donate Blood </h2>
    </div>  
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
          <div>
            <label>Blood Group</label>
            <select id="bloodTypeSelect" value={selectedBloodType}
        onChange={handleBloodTypeChange}>
        <option value="">Select Blood Types</option>
        <option value="o+">O+</option>
        <option value="a+">A+</option>
        <option value="o-">O-</option>
        <option value="b+">B+</option>
        <option value="b-">B-</option>
        {/* Add more options for other blood types */}
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
            </tr>
          ))}
          {/* ends here */}
          </table>
      ):( <h3 style={{ textAlign: "center" }}>Ooooops No Blood Bank Found !</h3>
      )}
      
    </>
  );
};

export default Availablity;