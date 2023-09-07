import React, { useEffect } from "react";
import "./BloodBankRepo.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
const BloodBankRepo = () => {
  const [userId, setuserId] = useState('econd')
  const docRef = doc(db, "BloodReports", localStorage.getItem("reportId"));

  useEffect(() => {
    const getReport = async () => {
      const docSnap = await getDoc(docRef);
      const snapData = docSnap;
      if (snapData.exists()) {
        console.log(snapData.data());
        
      } else {
        console.log("Document does not exist");
      }
    };
    getReport();
  }, []);

  return (
    <>
      <div className="repoBody">
        <div>
          <h3>BloodBankRepo</h3>
          <div className="main">
            <div className="t1">
              <p>Name</p>
              <p>Contact</p>
              <p>Address</p>
              <p>Category</p>
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
            <p>Blood Bank Id</p>
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
