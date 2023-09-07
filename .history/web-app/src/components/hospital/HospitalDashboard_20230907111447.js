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
          Hospital Dashboard <span className="spanOfBBTititle"></span>
        </div>
        <button
          className="button"
          style={{ backgroundColor: "black" }}
          onClick={logout}
        >
          logout
        </button>
      </div>
      <div style={{marginTop : "-20px"}} className="userDetail">
        <div className="info1">
          <div>
          <span style={{fontweight : "bolder"}} className="spanOfBBTititle">Hospital Name :</span>
         <span style={{fontWeight:"normal" }}>
             {hospData.hospName}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bolder"}} className="spanOfBBTititle">Email :</span>
        <span style={{fontWeight:"normal" }}>
              {hospData.email}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bolder"}} className="spanOfBBTititle">Id :</span>
        <span style={{fontWeight:"normal" }}>
              {hospData.uId}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bolder"}} className="spanOfBBTititle">Category :</span>
         <span style={{fontWeight:"normal" }}>
             {hospData.type}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bolder"}} className="spanOfBBTititle">Address:</span>
         <span style={{fontWeight:"normal" }}>
             {hospData.address}
          </span>
          </div>
        </div>
        <div className="info1">
          <div>
          <span style={{fontweight : "bolder"}} className="spanOfBBTititle">Contact:</span>
         <span style={{fontWeight:"normal" }}>
             {hospData.contact}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bolder"}} className="spanOfBBTititle">State :</span>
         <span style={{fontWeight:"normal" }}>
             {hospData.state}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bolder"}} className="spanOfBBTititle">City:</span>
         <span style={{fontWeight:"normal" }}>
             {hospData.city}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bolder"}} className="spanOfBBTititle">District :</span>
        <span style={{fontWeight:"normal" }}>
              {hospData.district}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bolder"}} className="spanOfBBTititle">pincode :</span>
        <span style={{fontWeight:"normal" }}>
              {hospData.pincode}
          </span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="compDiv">
          <Link to="/searchBlood">
            <img width="200px" src="./image/blood-type.png" alt="" />
            <p style={{textAlign:'center', fontSize : "20px", fontWeight : "bolder"}}>Search Blood</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
