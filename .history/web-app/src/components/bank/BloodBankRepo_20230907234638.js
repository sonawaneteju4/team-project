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
  const [userData, setuserData] = useState([]);

  const [userId, setuserId] = useState("");
  const [bankId, setbankId] = useState("");
  const [BankInfoReport, setBankInfoReport] = useState([]);
  const [userReport, setuserReport] = useState([]);
  const [userPer, setuserPer] = useState([]);
  const docRef = doc(db, "BloodReports", localStorage.getItem("reportId"));
  const usersDataRef = collection(db, "donnarInfo");
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

    const q2 = query(
      usersDataRef,
      where("uId", "==", localStorage.getItem("userId"))
    );
    const getUserDetails = async () => {
      const data = await getDocs(q2);
      data.forEach((item) => {
        console.log(item.data());
        setuserData(item.data());
        localStorage.setItem("userDocId", item.id);
        localStorage.setItem("donorInfo", userData);
        sessionStorage.setItem("BloodGroup", item.data().bloodGroup);
        console.log("userData  " + userData);
      });
    };
    getUserDetails();
    const qb = query(BankRef, where("uId", "==", userId));

    const bank = async () => {
      try {
        const BankInfo = await getDocs(qb);
        console.log(BankInfo);
        const data = BankInfo;
        data.forEach((item) => {
          console.log(item.data());
          setBankInfoReport(item.data());
          console.log("bank Indo" + BankInfoReport);
        });
      } catch (error) {}
    };
    getReport();
    bank();
  }, []);
    const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="repoBody">
        <h1 style={{textAlign: "center", fontWeight: "bolder" ,color : "white"}}>Blood Report</h1>
        <div>
          <hr />
          <h3>Blood Bank</h3>
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
          <hr />  
          <h3 className="main">Donor Info</h3>
          <div className="main">
            <div className="t1">
              <p>Name : {sessionStorage.getItem("userName")}</p>
              <p>Address : {sessionStorage.getItem("address")}</p>
              <p>Contact No : {sessionStorage.getItem("mobile")}</p>
            </div>
            <div className="t2">
              <p> BloodGroup : {sessionStorage.getItem("BloodGroup")}</p>
              <p>Age : {sessionStorage.getItem("age")}</p>
              <p>Weight : {sessionStorage.getItem("weight")}</p>
            </div>
          </div>
        </div>
<hr />
        <h3>Blood Report</h3>
        <div className="main">
          <div className="t1">
            <p>Blood Bank Id : {userReport.BloodBankId}</p>
            <p>Blood Group : {userData.bloodGroup}</p>
            <p>HIV : {userReport.HIV}</p>
            <p>Haemoglobin : {userReport.Haemoglobin} </p>
            <p>Platelet Count : {userReport.Pathaltes}</p>
          </div>
          <div className="t2">
            <p>RBC Count : {userReport.RBC}</p>
            <p>Type OF Donation : {userReport.TypeOfDonation}</p>
            <p>Date Of Donation : {userReport.dateOfDonation}</p>
            <p>Hepatities B : {userReport.hepatitiesB}</p>
            <p>Hepatities C : {userReport.hepatitiesC}</p>
            <p>Plasma Count : {userReport.plasma}</p>
          </div>
        </div>
        <div className="printreport">

        <button style={{ba}} className="button mybt"  onClick={handlePrint}>Print Report</button>
        </div>
      </div>
    </>
  );
};

export default BloodBankRepo;
