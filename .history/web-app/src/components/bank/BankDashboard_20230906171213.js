import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const BankDashboard = () => {
  const navigate = useNavigate();
  const bankCollRef = collection(db, "bankInfo");
  const [BankId, setBankId] = useState("");
  const [bankData, setbankData] = useState([]);

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
      localStorage.setItem("userDocId" , item.id)
      sessionStorage.setItem("BloodGroup" , item.data().bloodGroup)
      console.log("userData  " + userData);
    });
  };
  getUserDetails();
}, []);
  console.log(BankId);

  const logout = async () => {
    localStorage.removeItem("userId");
    await signOut(auth);
    console.log("account LogOut");
    navigate("/");
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        BankDashboard
        <div>Email :{bankData.email}</div>
        <div>Name : {bankData.name}</div>
        <div>Id :{bankData.uId}</div>
        <div>Address: {bankData.address}</div>
        <div>State :{bankData.state}</div>
        <div>District:{bankData.district}</div>
        <div>City:{bankData.city}</div>
        <div>Contact:{bankData.contact}</div>
        <div>Category :{bankData.category}</div>
      </div>
      <hr />
      <div>
        <Link to="/donationReq">Donation Req</Link>
      </div>
      <div>
        <Link to="/createNewReport">Create New Blood Donotion Form</Link>
      </div>
      <div>
        <Link to="/hospitalReq">Hospital Req</Link>
      </div>
      <div></div>
      <div>
        <Link to="/stockOfBlood">
          Stock
        </Link>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default BankDashboard;
