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
        localStorage.setItem("userDocId", item.id);
        sessionStorage.setItem("BloodGroup", item.data().bloodGroup);
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
      <div className="heading" style={{ textAlign: "start" }}>User Info</div>
        <button className="button" style={{backgroundColor : "black"}} onClick={logout}>
          logout
        </button>
      </div>
      <div className="userDetail">
        <div className="demoImg">
          <img className="userImg" src="./image/usericon.png" alt="" />
        </div>
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
      </div>
      <div className="donorInfo">
        <div className="compDiv">
          <Link to="/donateBlood">
            <img
              height={"200px"}  
              src="./image/blood-extraction.png"
              alt="blood"
            />
           <p>
            
            Donate Blood
            </p> 
          </Link>
        </div>
        <div className="compDiv">
          <Link to='/reports'>Reports
          <img
            height={"200px"}
           
            src="./image/test.png"
            alt="bank"
          ></img>
          <p>
            
          </p>
          </Link> 
        </div>
        <div className="compDiv">
          <img
            height={"200px"}
           
            src="./image/donationprecaution.png"
            alt=""
            ></img>
        </div>
        <div>
          <img src="" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default DonnarDashboard;
