import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
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
      data.forEach((item) => {
        console.log(item.data());
        setuserData(item.data());
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
        <div className="uName">{userData.userName}</div>
        <div></div>
        <button className="logoutBtn" onClick={logout}>
          logout
        </button>
      </div>

      <div className="pageContaint">
          <div className="sideBar">
            <SideBar></SideBar>
          </div>
          <div className="sidePage">
            <div>
              {userData.userName}
              {userData.aadar}
              {userData.address}
              {userData.age}
              {userData.bloodGroup}
              {userData.dist}
              {userData.mobile}
              {userData.gender}
              {userData.pincode}
              {userData.state}
              {userData.weight}
            </div>
          </div>
      </div>


    </div>
  );
};

export default DonnarDashboard;
