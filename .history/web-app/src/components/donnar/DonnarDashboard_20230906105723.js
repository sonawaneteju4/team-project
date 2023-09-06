import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./donarDash.css";
import SideBar from "./SideBar";

const DonnarDashboard = () => {
  const [userData, setuserData] = useState([]);
  const usersDataRef = collection(db, "donnarInfo");
  const navigate = useNavigate();
  onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        const uid = user.uid;
      } else {
        navigate("/");
      }
    },
    []
  );

  useEffect(() => {
    const q2 = query(
      usersDataRef,
      where("uId", "==", localStorage.getItem("userId"))
    );
    const getUserDetails = async () => {
      const data = await getDocs(q2);
      // setuserData(data)
      data.forEach((item) => {
        console.log(item.data());
        setuserData(item.data());
        localStorage.setItem("db")
        console.log("userData  " + userData);
      });
    };
    getUserDetails();
  }, []);
  const logout = async () => {
    localStorage.removeItem("userId");
    await signOut(auth);
    console.log("account LogOut");
    navigate("/");
  };

  return (
    <div>
      <div className="logNav">
        <button className="button" onClick={logout}>
          logout
        </button>
      </div>
      <h3 style={{ textAlign: "center" }}>User Info</h3>

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
        <div className="info1"></div>
      </div>
      <hr />
      <div className="donorInfo">
        <div>
          <Link to="/donateBlood">
            <img  height={"200px"} style={{backgroundColor:"white", borderRadius:"20px", margin:'20px'}} src="./image/blood-extraction.png" alt="blood" />
            Donate Blood
          </Link>
        </div>
        <div>
          <img height={"200px"} style={{backgroundColor:"white", borderRadius:"20px", margin:'20px'}}  src="./image/test.png" alt="bank"></img>
        </div>
        <div>
          <img height={"200px"} style={{backgroundColor:"white", borderRadius:"20px", margin:'20px'}}  src="./image/donationprecaution.png" alt=""></img>
        </div>
        <div>
          <img src="" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default DonnarDashboard;
