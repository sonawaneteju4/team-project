import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { db } from "../../firebaseConfig";

import React from 'react'
import { useNavigate } from "react-router-dom";

const BankReportForm = () => {
    const [regUser,setregUser]=useState({
        BloodBankId:"",
        BloodGroup:" ",
        HIV:" ",
        Haemoglobin:" ",
        Pathaltes:" ",
        plasma:" ",
        RBC:"",
        TypeOfDonation:" ",
        dateOfDonation:" ",
        donorId:" ",
        hepatitiesB:"",
        hepatitiesC:" ",
    });
    const usersCollectionRef=collection(db,"BloodReports");
    const usersDataRef=collection(db,"BankReportForm");  //he collection nahiye 
    const navigate=useNavigate();
    console.log(regUser.state);

    const handleChange=(e)=>{
        setregUser({...regUser,[e.target.BloodBankId]:e.target.value});
    };

    const report =async()=>{
        await addDoc(usersCollectionRef,{
            BloodBankId:regUser.BloodBankId,
            BloodGroup:regUser.BloodGroup,
            HIV:regUser.HIV,
            Haemoglobin:regUser.Haemoglobin,
            Pathaltes:regUser.Pathaltes,
            plasma:regUser.plasma,
            RBC:regUser.RBC,
            TypeOfDonation:regUser.TypeOfDonation,
            dateOfDonation:regUser.dateOfDonation,
            donorId:regUser.donorId,
            hepatitiesB:regUser.hepatitiesB,
            hepatitiesC:regUser.hepatitiesC,
});
navigate("/");

    };

return (
    <>
    <div>BankReportForm</div>
    <div>
        <label htmlFor=" ">Blood Bank Id</label>
        <input type="number" name="BloodBankId " onChange={handleChange} />

    </div>
    <div>
        <label htmlFor=" ">Blood Group</label>
        <select name="bloodGroup" onChange={handleChange} id="" required>
                <option value="">Select Blood Group</option>
                <option value="A+ve">A+ve</option>
                <option value="A-ve">A-ve</option>
                <option value="B+ve">B+ve</option>
                <option value="B-ve">B-ve</option>
                <option value="O+ve">O+ve</option>
                <option value="O-ve">O-ve</option>
                <option value="AB+ve">AB+ve</option>
                <option value="AB-ve">AB-ve</option>
              </select>

    </div>
    <div>
        <label htmlFor=" ">HIV</label>
        <input type="number" name="HIV " onChange={handleChange} />

    </div>
    <div>
        <label htmlFor=" ">Haemoglobin</label>
        <input type="number" name="Haemoglobin " onChange={handleChange} />

    </div>
    <div>
        <label htmlFor=" ">Platelet Count</label>
        <input type="number" name="Platelet" onChange={handleChange} />

    </div>
    <div>
        <label htmlFor=" ">Plasma </label>
        <input type="number" name="plasma" onChange={handleChange} />

    </div>
    <div>
        <label htmlFor=" ">RBC Count</label>
        <input type="number" name="RBC " onChange={handleChange} />

    </div>
    <div>
        <label htmlFor=" ">Type Of Donation</label>
        <select name="TypeOfDonation" onChange={handleChange} id="" required>
                <option value="">Select Type</option>
                <option value="A+ve">A+ve</option>
                <option value="A-ve">A-ve</option>
                <option value="B+ve">B+ve</option>
                </select>

    </div>
    </>
  )
}

export default BankReportForm
       



   