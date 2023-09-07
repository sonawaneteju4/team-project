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
        sessionStorage.setItem("BankEmail", items.data().email);
        setBankId(items.data().uId);
      });
    };
    getInfo();
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
          Bank Dashboard{" "}
<span className="snapOfTitile">
  </span>
          </div>
        <button
          className="button"
          style={{ backgroundColor: "black" }}
          onClick={logout}
        >
          logout
        </button>
      </div>{" "}
      <div className="userDetail">
        <div className="demoImg">
          <img className="userImg" src="./image/usericon.png" alt="" />
        </div>

        <div className="">
          <div><span className="snapOfTitile">
            Email :
            </span>
            {bankData.email}</div>
          <div><span className="snapOfTitile">
            Name :
            </span>
             {bankData.name}</div>
          <div><span className="snapOfTitile">
            Id :
            </span>
            {bankData.uId}</div>
          <div><span className="snapOfTitile">
            Address:
            </span>
             {bankData.address}</div>
        </div>
        <div>
          <div><span className="snapOfTitile">
            State :
            </span>
            {bankData.state}</div>
          <div><span className="snapOfTitile">
            </span>
            District:{bankData.district}</div>
          <div><span className="snapOfTitile">
            City:
            </span>
            {bankData.city}</div>
          <div><span className="snapOfTitile">
            </span>
            Contact:{bankData.contact}</div>
          <div><span className="snapOfTitile">
            </span>
            Category :{bankData.category}</div>
        </div>
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
        <Link to="/stockOfBlood">Stock</Link>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default BankDashboard;
