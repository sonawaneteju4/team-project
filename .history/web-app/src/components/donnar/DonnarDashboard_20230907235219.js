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
        localStorage.setItem("donorInfo", userData);
        sessionStorage.setItem("BloodGroup", item.data().bloodGroup);
        sessionStorage.setItem("userName", item.data().userName);
        sessionStorage.setItem("age", item.data().age);
        sessionStorage.setItem("address", item.data().address);
        sessionStorage.setItem("mobile", item.data().mobile);
        sessionStorage.setItem("weight", item.data().weight);
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
        <div className="heading" style={{ textAlign: "start" }}>
          <span style={{ fontFamily: "Montserrat" , color:'white'}}>{userData.userName} </span>
        </div>
        <button
          className="button"
          style={{ backgroundColor: "black" , paddingRight: "20px",
        paddingLeft: "20px" }}
          onClick={logout}
        >
          logout
        </button>
      </div>
      <div className="userDetail">
        <div className="demoImg">
          <img className="userImg" src="./image/usericon.png" alt="" />
        </div>
        <div className="donorInfo">
          <div className="info1">

            <div>
              <span className="spanOftitile">Age :</span>
              {userData.age}
            </div>
            <div>
              <span className="spanOftitile">Blood Group:</span>
              {userData.bloodGroup}
            </div>
            <div>
              <span className="spanOftitile">Weight :</span>
              {userData.weight} Kg
            </div>
          </div>
          <div className="info1">
            <div>
              <span className="spanOftitile">Contact :</span>
              {userData.mobile}
            </div>
            <div>
              <span className="spanOftitile">Gender :</span>
              {userData.gender}
            </div>
            <div>
              <span className="spanOftitile">District :</span>
              {userData.dist}
            </div>
            <div>
              <span className="spanOftitile">State :</span>
              {userData.state}
            </div>
          </div>
          <div className="info1">
            <div>
              <span className="spanOftitile">Pincode</span>
              {userData.pincode}
            </div>
            <div>
              <span className="spanOftitile">Aadhar:</span>
              {userData.aadhar}
            </div>
            <div>
              <span className="spanOftitile">Address:</span>
              {userData.address}
            </div>
          </div>
          <div className="info1"></div>
        </div>
      </div>
      <div className="donorInfo">
        <div className="compDiv">
          <Link to="/donateBlood">
            <img
              height={"160px"}
              src="./image/blood-extraction.png"
              alt="blood"
            />
            <p className="pOfInof">Donate Blood</p>
          </Link>
        </div>
        <div className="compDiv">
          <Link to="/reports">
            <img height={"160px"} src="./image/test.png" alt="bank"></img>
            <p className="pOfInof">Reports</p>
          </Link>
        </div>
        <div className="compDiv">
          <Link to="/precaution">
            <img
              height={"160px"}
              src="./image/donationprecaution.png"
              alt=""
            ></img>
            <p className="pOfInof">
              Precocious Before <br />
              donating blood
            </p>
          </Link>
        </div>
        <div>
          <img src="" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default DonnarDashboard;
