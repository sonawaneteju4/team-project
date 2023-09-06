import React from 'react'
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./dForm.css";
const BankEndValidation = () => {

  const [donorHistory, setdonorHistory] = useState({
    donatebloodbefore: "",
    lastdonatedate: "",
    bloodtestbefore: " ",
    currentlysuffereing: " ",
    cbc: "",
    hiv: "",
    hephitiesb: "",
    hephitiesc: "",
    fever: "",
    cold: "",
    flue: "",
    dibeties: "",
  });
  const userId = localStorage.getItem("userDocId");
  const navigate = useNavigate();
  console.log(donorHistory.state);
  const { bbId } = useParams();
  console.log("bbId:", bbId);

  const handleChange = (e) => {
    setdonorHistory({ ...donorHistory, [e.target.name]: e.target.value });
  };

  const donor = async () => {
    console.log("Donor function called");
    const collectionRef = collection(db, "donnarInfo"); // Reference to the collection
    const reqColRef = collection(db, "DonationReq")
    const documentRef = doc(collectionRef, userId); // Reference to the specific document
    try {
      await updateDoc(documentRef, {
        donatebloodbefore: donorHistory.donatebloodbefore,
        lastdonatedate: donorHistory.lastdonatedate,
        bloodtestbefore: donorHistory.bloodtestbefore,
        currentlysuffereing: donorHistory.currentlysuffereing,
        cbc: donorHistory.cbc,
        hiv: donorHistory.hiv,
        hephitiesb: donorHistory.hephitiesb,
        hephitiesc: donorHistory.hephitiesc,
        fever: donorHistory.fever,
        cold: donorHistory.cold,
        flue: donorHistory.flue,
        dibeties: donorHistory.dibeties,
      });
      await addDoc(reqColRef,{
        bankId : bbId,
        bloodGroup : sessionStorage.getItem('BloodGroup') ,
        satusOfReq  : "ReqRecived",
        userId : localStorage.getItem('userId')
      });
      alert('Document Submited')
      navigate('/donarDash')
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  return (
    <div>BankEndValidation</div>
  )
}

export default BankEndValidation