import React, { useEffect, useState } from "react";
import importedData from "./../json/states.json";
import { collection } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
const SearchBlood = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [bloodGroup, setbloodGroup] = useState('B-ve');
    const [bloodBankIds, setBloodBankIds] = useState([]);
  
    const [bbData, setbbData] = useState([]);
    const states = importedData.states;
    const BankDataRef = collection(db, "bankInfo");
    const bloodDataRef = collection(db, "BloodReports");
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
      console.log('Selected blood group:', bloodGroup);
      setbloodGroup(bloodGroup);
    };
  
    
    useEffect(() => {
      const checkForBlood = async () => {
        try {
          const q = query(bloodDataRef, where("BloodGroup", "==", bloodGroup ));
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
  
  return <div>SearchBlood</div>;
};

export default SearchBlood;
