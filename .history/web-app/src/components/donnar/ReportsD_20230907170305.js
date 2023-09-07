import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const ReportsD = () => {
  const navigate = useNavigate();
  const [reports, setreports] = useState([]);
  const dataRef = collection(db, "BloodReports");

  useEffect(() => {
    const q = query(
      dataRef,
      where("donorId", "==", localStorage.getItem("userId"))
    );
    const getResult = async () => {
      const querySnapshot = await getDocs(q);
      const reportsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setreports(reportsData);
      console.log(reportsData);
    };
    getResult();
  }, []);
  const handleButtonClick = (reportId) => {
    // Set the reportId in localStorage
    localStorage.setItem("reportId", reportId);
    navigate("/userReport");
  };
  return (
    <div>
        <p style={{}}>Reports</p>
      <div>
        {reports.map((report, index) => (
          <div key={index} className="reportD">
            {/* Render your report data here */}
            <div>Report iD : {report.donorId}</div>
            <div>Bank Id: {report.BloodBankId}</div>
            <div>Report Date :{report.dateOfDonation}</div>
            <div>Type Of Donation: {report.TypeOfDonation}</div>
            <button 
            className="button"
              key={report.id}
              onClick={() => handleButtonClick(report.id)}
            >
              Get Report{" "}
            </button>{" "}
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsD;
