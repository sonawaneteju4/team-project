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
      <div>{hospData.email}</div>
      <div>{hospData.uId}</div>
      <div>{hospData.address}</div>
      <div>{hospData.city}</div>
      <div>{hospData.contact}</div>
      <div>{hospData.district}</div>

            <button onClick={logout}>Logout</button>
    </div>
  )
}

export default HospitalDashboard