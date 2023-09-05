import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const BankDashboard = () => {
  const navigate = useNavigate();
  const bankCollRef = collection(db, "bankInfo");
  const [BankId, setBankId] = useState("");
  const [bankData, setbankData] = useState([]);

  useEffect(() => {
    const q = query(
      bankCollRef,
      where("uId", "==", localStorage.getItem("userId"))
    );
    const getInfo = async () => {
      const data = await getDocs(q);
      console.log("heeeee" + data);
      setbankData(data);
      data.forEach((items) => {
        setbankData(items.data());
        console.log("helllo " + bankData);

        setBankId(items.data().uId);
      });
    };
    getInfo();
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
      <div>Blood Don Reqs</div>
      <div>
        Link
      </div>
      <div>Hospital Req</div>
      <div>Stock Mangement</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default BankDashboard;
