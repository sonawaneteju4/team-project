import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import './handle.css'

const HandleReq = ({ stausId }) => {
  const [userData, setuserData] = useState([]);
  const [userId, setuserId] = useState("");
  const usersDataRef = collection(db, "donnarInfo");
  const colRef = collection(db, "donnarInfo");

  useEffect(() => {
    const q2 = query(usersDataRef, where("uId", "==", stausId));
    const getUserDetails = async () => {
      const data = await getDocs(q2);
      // setuserData(data)
      data.forEach((item) => {
        console.log(item.data());

        setuserId(item.data().uId);
        setuserData(item.data());
      });
    };
    getUserDetails();
  }, []);

  const nav = useNavigate();
  const handleReport = () => {
    localStorage.setItem("CurrentUserId", userId);
    nav("/bloodReportsGenration");
  };

  return (
    <div className="box">
      <div className="donorInfo">
        <div className="info1">
          <div>Name: {userData.userName}</div>

          <div>Age :{userData.age}</div>
          <div>Blood Group: {userData.bloodGroup}</div>
          <div>Weight :{userData.weight} Kg</div>
        </div>
        <div className="info1">
          <div>Contact :{userData.mobile}</div>
          <div>Gender :{userData.gender}</div>
          <div>District :{userData.dist}</div>
          <div>State :{userData.state}</div>
        </div>
        <div className="info1">
          <div>Pincode :{userData.pincode}</div>
          <div>Aadhar: {userData.aadhar}</div>
          <div>Address: {userData.address}</div>
        </div>
        <div className="info1">
          <div>Pincode :{userData.pincode}</div>
          <div>Aadhar: {userData.aadhar}</div>
          <div>Address: {userData.address}</div>
        </div>
        <div className="info1"></div>
        <button className="button" onClick={handleReport}>
          Genrate Report
        </button>
      </div>
    </div>
  );
};

export default HandleReq;
