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
  const [BankInfo, setBankInfo] = useState([]);
  const [userReport, setuserReport] = useState([]);
  const [userPer, setuserPer] = useState([]);
  const docRef = doc(db, "BloodReports", localStorage.getItem("reportId"));
  const DataRef = collection(db, "donnarInfo");
  const BankRef = collection(db, "bankInfo");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        const snapData = docSnap;
        if (snapData.exists()) {
          setuserReport(snapData.data());
          setuserId(snapData.data().donorId);
          const tempId1 = userId;
          setbankId(snapData.data().BloodBankId);
  
          const q = query(DataRef, where("uId", "==", userId));
          const userInfo = await getDocs(q);
          userInfo.forEach((item) => {
            setuserPer(item.data());
          });
  
          const qb = query(BankRef, where("uId", "==", userId));
          const BankInfo = await getDocs(qb);
          BankInfo.forEach((item) => {
            setBankInfo(item.data());
          });
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <>
      <div className="repoBody">
        <div>
          <h3>BloodBankRepo</h3>
          <div className="main">
            <div className="t1">
              <p>Name : {userPer.userName}</p>
              <p>Contact : {userPer.mobile}</p>
              <p>Address : {userPer.address}</p>
              <p>Category : {userPer.userName}</p>
            </div>
            <div className="t2">
              <p>State</p>
              <p>District</p>
              <p>City</p>
              <p>Pincode</p>
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
