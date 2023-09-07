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
    const q = query(DataRef, where("uId", "==", localStorage.getItem('Ixxuqowvtm6mcH5QPfm7')));

    
    const user = async () => {
      try {
        const userInfo = await getDocs(q);
        const data = userInfo;
        data.forEach((item) => {
          console.log(item.data());
          setuserPer(item.data());
          console.log("userData  " + userPer);
        });
      } catch (error) {}
    };
    const qb = query(BankRef, where("uId", "==", userId));

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
    getReport();
    user();
    bank();
  }, [BankInfoReport,userPer,userReport]);

  return (
    <>
      <div className="repoBody">
        <div>
          <h3>BloodBankRepo</h3>
          <div className="main">
            <div className="t1">
              <p>Name : {BankInfoReport.name}</p>
              <p>Contact : {BankInfoReport.contact}</p>
              <p>Address : {BankInfoReport.address}</p>
              <p>Category : {BankInfoReport.category}</p>
            </div>
            <div className="t2">
              <p>State : {BankInfoReport.state}</p>
              <p>District : {BankInfoReport.district}</p>
              <p>City :{BankInfoReport.city}</p>
              <p>Pincode {BankInfoReport.pincode}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="main">donorinfor</h3>
          <div className="main">
            <div className="t1">
              <p>Name {userPer.name}</p>
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
