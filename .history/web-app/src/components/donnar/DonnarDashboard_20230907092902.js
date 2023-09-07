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
            <div> 
              <span className="spanOftitile"></span>
               Name: {userData.userName}</div>

            <div> 
              <span className="spanOftitile"></span>
               Age :{userData.age}</div>
            <div> 
              <span className="spanOftitile"></span>
               Blood Group: {userData.bloodGroup}</div>
            <div> 
              <span className="spanOftitile"></span>
               Weight :{userData.weight} Kg</div>
          </div>
          <div className="info1">
            <div> 
              <span className="spanOftitile"></span>
               Contact :{userData.mobile}</div>
            <div> 
              <span className="spanOftitile"></span>
               Gender :{userData.gender}</div>
            <div> 
              <span className="spanOftitile"></span>
               District :{userData.dist}</div>
            <div> 
              <span className="spanOftitile"></span>
               State :{userData.state}</div>
          </div>
          <div className="info1">
            <div> 
              <span className="spanOftitile"></span>
               Pincode :{userData.pincode}</div>
            <div> 
              <span className="spanOftitile"></span>
               Aadhar: {userData.aadhar}</div>
            <div> 
              <span className="spanOftitile"></span>
               Address: {userData.address}</div>
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
           <p className='pOfInof'>
            
            Donate Blood
            </p> 
          </Link>
        </div>
        <div className="compDiv">
          <Link to='/reports'>
          <img
            height={"200px"}
           
            src="./image/test.png"
            alt="bank"
          ></img>
          <p className='pOfInof'>
          Reports
          </p >
          </Link> 
        </div>
        <div className="compDiv">
          <Link to="/">
          <img
            height={"200px"}
            
            src="./image/donationprecaution.png"
            alt=""
            ></img>
            <p className='pOfInof'>Precocious before <br />donating blood</p>
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
