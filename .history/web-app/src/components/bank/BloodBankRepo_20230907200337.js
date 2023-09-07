import React, { useEffect, useState } from "react";
import "./BloodBankRepo.css";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
const BloodBankRepo = () => {
  const [userId, setuserId] = useState("");
  const [bankId, setbankId] = useState("");
  const [BankInfoReport, setBankInfoReport] = useState([]);
  const [userReport, setuserReport] = useState([]);
  const [userPer, setuserPer] = useState([]);
  const docRef = doc(db, "BloodReports", localStorage.getItem("reportId"));
  const DataRef = collection(db, "donnarInfo");
  const BankRef = collection(db, "bankInfo");
  useEffect(() => {
    const getReport = async () => {
      const docSnap = await getDoc(docRef);
      const snapData = docSnap;
      if (snapData.exists()) {
        setuserReport(snapData.data());
        console.log(snapData.data());
        // console.log("Report"+userReport);
        setuserId(snapData.data().BloodBankId);
        // setbankId(snapData.data().BloodBankId);
        // console.log(bankId)
        console.log(userId);
      } else {
        console.log("Document does not exist");
      }
    };
    getReport();
    
    const qb = query(BankRef, where("uId", "==", userId));
    const user = async () => {
      try {
        const userInfo = await getDocs(qb);
        const data = userInfo;
        data.forEach((item) => {
          console.log(item.data());
          setuserPer(item.data());
          
          console.log("userData  " + userPer);
        });
      } catch (error) {}
    };
    user();
    const bank = async () => {
      try {
        const BankInfo = await getDocs(qb);
        console.log(BankInfo)
        const data = BankInfo;
        data.forEach((item) => {
          console.log(item.data());
          setBankInfoReport(item.data());
          console.log("bank Indo"+BankInfoReport);
        });
      } catch (error) {}
    };
    bank();
  }, []);

  return (
    <>
      <div className="repoBody">
        <div>
          <h3>BloodBankRepo</h3>
          <div className="main">
            <div className="t1">
              <p>Name : {userPer.name}</p>
              <p>Contact : {userPer.contact}</p>
              <p>Address : {userPer.address}</p>
              <p>Category : {userPer.category}</p>
            </div>
            <div className="t2">
              <p>State : {userPer}</p>
              <p>District : {userPer}</p>
              <p>City : {{userPer}}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="main">donorinfor</h3>
          <div className="main">
            <div className="t1">
              <p>Name </p>
              <p>Address </p>
              <p>Contact No</p>
              <p>State</p>
              <p>City</p>
              <p>Pincode</p>
            </div>
            <div className="t2">
              <p> Gender</p>
              <p>Age</p>
              <p>Weight</p>
              <p> Last Donate Date</p>
              <p>Blood Test Before</p>
              <p> Blood Group</p>
            </div>
          </div>
        </div>

        <h3>Title Here</h3>
        <div className="main">
          <div className="t1">
            <p>Blood Bank Id : {userReport.BloodBankId}</p>
            <p>Blood Group</p>
            <p>HIV</p>
            <p>Haemoglobin</p>
            <p>Platelet Count</p>
          </div>
          <div className="t2">
            <p>RBC Count</p>
            <p>Type OF Donation</p>
            <p>Date Of Donation</p>
            <p>Hepatities B</p>
            <p>Hepatities C</p>
            <p>Plasma Count</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodBankRepo;
