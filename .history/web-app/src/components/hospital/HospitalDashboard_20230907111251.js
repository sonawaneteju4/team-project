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
      <div className="userDetail">
        <div className="info1">
          <div>
          <span style={{fontweight : "bold"}} className="spanOfBBTititle">Hospital Name :</span>
         <spa n>
             {hospData.hospName}
          </spa>
          </div>
          <div>
          <span style={{fontweight : "bold"}} className="spanOfBBTititle">Email :</span>
        <span >
              {hospData.email}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bold"}} className="spanOfBBTititle">Id :</span>
        <span >
              {hospData.uId}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bold"}} className="spanOfBBTititle">Category :</span>
         <spa n>
             {hospData.type}
          </spa>
          </div>
          <div>
          <span style={{fontweight : "bold"}} className="spanOfBBTititle">Address:</span>
         <spa n>
             {hospData.address}
          </spa>
          </div>
        </div>
        <div className="info1">
          <div>
          <span style={{fontweight : "bold"}} className="spanOfBBTititle">Contact:</span>
         <spa n>
             {hospData.contact}
          </spa>
          </div>
          <div>
          <span style={{fontweight : "bold"}} className="spanOfBBTititle">State :</span>
         <spa n>
             {hospData.state}
          </spa>
          </div>
          <div>
          <span style={{fontweight : "bold"}} className="spanOfBBTititle">City:</span>
         <spa n>
             {hospData.city}
          </spa>
          </div>
          <div>
          <span style={{fontweight : "bold"}} className="spanOfBBTititle">District :</span>
        <span >
              {hospData.district}
          </span>
          </div>
          <div>
          <span style={{fontweight : "bold"}} className="spanOfBBTititle">pincode :</span>
        <span >
              {hospData.pincode}
          </span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="compDiv">
          <Link to="/searchBlood">
            <img width="200px" src="./image/blood-type.png" alt="" />
            <p style={{textAlign:'center', fontSize : "20px", fontWeight : "bold"}}>Search Blood</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
