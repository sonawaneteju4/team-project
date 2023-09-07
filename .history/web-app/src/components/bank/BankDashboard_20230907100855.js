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
          Bank Dashboard <span className="spanOftitile"></span>
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

        <div className="info1">
          <div>
            <span className="spanOftitile">Email :</span>
            {bankData.email}
          </div>
          <div>
            <span className="spanOftitile">Name :</span>
            {bankData.name}
          </div>
          <div>
            <span className="spanOftitile">Id :</span>
            {bankData.uId}
          </div>
          <div>
            <span className="spanOftitile">Address:</span>
            {bankData.address}
          </div>
        </div>
        <div>
          <div>
            <span className="spanOftitile">State :</span>
            {bankData.state}
          </div>
          <div>
            <span className="spanOftitile">District:</span>
            {bankData.district}
          </div>
          <div>
            <span className="spanOftitile">City:</span>
            {bankData.city}
          </div>
          <div>
            <span className="spanOftitile">Contact:</span>
            {bankData.contact}
          </div>
          <div>
            <span className="spanOftitile">Category :</span>
            {bankData.category}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <Link to="/donationReq">
          {" "}
          <img height={"200px"} src="./image/test.png" alt="bank"></img>
          <p className="pOfInof">Donation Req</p>
        </Link>
      </div>
      <div>
        <Link to="/createNewReport">
          {" "}
          <img height={"200px"} src="./image/test.png" alt="bank"></img>
          <p className="pOfInof">Create New Blood Donotion Form</p>
        </Link>
      </div>
      <div>
        <Link to="/hospitalReq">
          {" "}
          <img height={"200px"} src="./image/test.png" alt="bank"></img>
          <p className="pOfInof">Hospital Req</p>
        </Link>
      </div>
      <div></div>
      <div>
        <Link to="/stockOfBlood">
          {" "}
          <img height={"200px"} src="./image/test.png" alt="bank"></img>
          <p className="pOfInof">Stock</p>
        </Link>
      </div>
    </div>
  );
};

export default BankDashboard;
