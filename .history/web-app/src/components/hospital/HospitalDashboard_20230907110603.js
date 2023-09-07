import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const HospitalDashboard = () => {
  const navigate = useNavigate();
  const hospRef = collection(db, "hospInfo");
  const [HospId, setHospId] = useState("");
  const [hospData, sethospData] = useState([]);

  useEffect(() => {
    const q = query(
      hospRef,
      where("uId", "==", localStorage.getItem("userId"))
    );

    const getInfo = async () => {
      const data = await getDocs(q);
      console.log(data);
      sethospData(data);
      data.forEach((items) => {
        sethospData(items.data());
        console.log(hospData);
        setHospId(items.data().uId);
      });
    };
    getInfo();
  }, []);
  console.log(HospId);

  const logout = async () => {
    localStorage.removeItem("userId");
    await signOut(auth);
    console.log("account LogOut");
    navigate("/");
  };

  return (
    <div>
      <div className="logNav">
        <div className="heading" style={{ textAlign: "start" }}>
          Bank Dashboard <span className="spanOfBBTititle"></span>
        </div>
        <button
          className="button"
          style={{ backgroundColor: "black" }}
          onClick={logout}
        >
          logout
        </button>
      </div>
      <div className="userDetail">
        <div className="info1">
          <div> 
           <span className="spanOfBBTititle">
             Hospital Name :
            </span>
             {hospData.hospName}
            </div>
          <div> 
           <span className="spanOfBBTititle">
             Email :
            </span>
             {hospData.email}
            </div>
          <div> 
           <span className="spanOfBBTititle">
             Id :
            </span>
             {hospData.uId}
            </div>
          <div> 
           <span className="spanOfBBTititle">
             Category :
            </span>
             {hospData.type}
            </div>
          <div> 
           <span className="spanOfBBTititle">
             Address:
            </span>
             {hospData.address}
            </div>
        </div>
        <div className="info1">
          <div> 
           <span className="spanOfBBTititle">
             Contact:
            </span>
             {hospData.contact}
            </div>
          <div> 
           <span className="spanOfBBTititle">
             State :
            </span>
             {hospData.state}
            </div>
          <div> 
           <span className="spanOfBBTititle">
             City:
            </span>
             {hospData.city}
            </div>
          <div> 
           <span className="spanOfBBTititle">
             District :
            </span>
             {hospData.district}
            </div>
          <div> 
           <span className="spanOfBBTititle">
             pincode :
            </span>
             {hospData.pincode}
            </div>
        </div>
      </div>
<div style={{display:'flex',}}>

    <div className="compDiv">
      <img width="200px" src="./image/blood-type.png" alt="" />
      <Link to="/searchBlood">Search Blood</Link>
    </div>
    </div>
</div>
  );
};

export default HospitalDashboard;
