import React, { useEffect, useState } from "react";
import importedData from "./../../json/states.json";
import { addDoc, collection } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
const SearchBlood = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [bloodGroup, setbloodGroup] = useState("B-ve");
  const [bloodBankIds, setBloodBankIds] = useState([]);

  const [bbData, setbbData] = useState([]);
  const states = importedData.states;
  const BankDataRef = collection(db, "bankInfo");
  const bloodDataRef = collection(db, "BloodReports");
  const dataRef = collection(db, "HopitalReq");
  const navigate = useNavigate();
  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedDistrict(""); // Reset the district when the state changes
  };

  const handleDistrictChange = (event) => {
    const newDistrict = event.target.value;
    setSelectedDistrict(newDistrict);
  };

  const handleChange = (event) => {
    const bloodGroup = event.target.value;
    console.log("Selected blood group:", bloodGroup);
    setbloodGroup(bloodGroup);
    localStorage.s('BloodGroup')

  };

  const handleData = async (itemId) => {
    localStorage.setItem("dockId", itemId);
    await addDoc({
      hospitalId: localStorage.getItem("userId"),
      bloodGroup : localStorage.getItem('BloodGroup')
    });
  };

  useEffect(() => {
    const checkForBlood = async () => {
      try {
        const q = query(bloodDataRef, where("BloodGroup", "==", bloodGroup));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        const idsArray = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          idsArray.push(data.BloodBankId);
        });

        setBloodBankIds(idsArray);
        console.log("------------>", bloodBankIds);
      } catch (error) {}
    };
    checkForBlood();
  }, [bloodGroup]);
  //Query For Handle Bank Search
  const HandleSearch = async () => {
    const SerchBankQ = query(
      BankDataRef,
      where("state", "==", selectedState),
      where("district", "==", selectedDistrict),
      where("uId", "in", bloodBankIds)
    );
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
          <h2 style={{ textAlign: "center" }}>
            Search Blood Bank To Donate Blood{" "}
          </h2>
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
            <td>Blood Request</td>
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
              <td>
                <button className="button" onClick={() => handleData(item.id)}>
                  Req Blood
                </button>
              </td>
            </tr>
          ))}
          {/* ends here */}
        </table>
      ) : (
        <h3 style={{ textAlign: "center" }}>Ooooops No Blood Bank Found !</h3>
      )}
    </>
  );
};

export default SearchBlood;
