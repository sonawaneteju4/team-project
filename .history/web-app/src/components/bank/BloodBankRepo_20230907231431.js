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
    // Define the Firestore references
    const docRef = // Your Firestore document reference;
    const usersDataRef = // Your Firestore collection reference;

    // Function to get user report
    const getReport = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const snapData = docSnap.data();
          console.log(snapData);
          setuserReport(snapData);
          setUserId(snapData.BloodBankId);
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.error("Error fetching user report:", error);
      }
    };

    // Function to get user details
    const getUserDetails = async () => {
      try {
        const q2 = query(
          usersDataRef,
          where("uId", "==", localStorage.getItem("userId"))
        );

        const data = await getDocs(q2);
        const userDataArray = [];

        data.forEach((item) => {
          console.log(item.data());
          userDataArray.push(item.data());
        });

        if (userDataArray.length > 0) {
          const userDocId = data.docs[0].id;
          localStorage.setItem("userDocId", userDocId);
          localStorage.setItem("donorInfo", JSON.stringify(userDataArray[0]));
          sessionStorage.setItem("BloodGroup", userDataArray[0].bloodGroup);
          console.log("userData", userDataArray[0]);
          setUserData(userDataArray[0]);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    // Use Promise.all to wait for both asynchronous operations to complete
    Promise.all([getReport(), getUserDetails()]);

    // Include any dependencies in the dependency array if needed
  }, []);

  useEffect(() => {
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
    bank(); 
  }, []);
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
              <p>Name {userPer.userName}</p>
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
