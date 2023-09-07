import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  useState,useEffect} from "react";
import { auth,db } from '../../firebaseConfig';
import { collection, getDocs, query,where } from 'firebase/firestore';

const HospitalDashboard = () => {
  const navigate = useNavigate()
  const hospRef=collection(db,"hospInfo");
  const [HospId, setHospId] = useState('')
  const [hospData, sethospData] = useState([]);

  useEffect(() => {
    const q =query(
      hospRef,
      where("uId", "==", localStorage.getItem("userId"))
    );

    const getInfo = async() =>{
      const data=await getDocs(q);
      console.log(data);
      sethospData(data);
      data.forEach((items)=>{
        sethospData(items.data());
        console.log(hospData);
        setHospId(items.data().uId)
        localStorage.setItem
      });
    };
    getInfo();
  },[]);
  console.log(HospId)

  const logout = async () => {
    localStorage.removeItem("userId");
    await signOut(auth);
    console.log("account LogOut");
    navigate("/");
  };
  

  return (
    <div>HospitalDashboard
      <div>Hospital Name :{hospData.hospName}</div>
      <div>Email :{hospData.email}</div>
      <div>Id :{hospData.uId}</div>
      <div>Category :{hospData.type}</div>
      <div>Address:{hospData.address}</div>
      <div>Contact:{hospData.contact}</div>
      <div>State :{hospData.state}</div>
      <div>City:{hospData.city}</div>
      <div>District :{hospData.district}</div>
      <div>pincode :{hospData.pincode}</div>

            <button onClick={logout}>Logout</button>
    </div>
  )
}

export default HospitalDashboard