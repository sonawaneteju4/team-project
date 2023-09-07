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
    
  };
  return (
    <div>
      ReportsD
      <div>
        {reports.map((report, index) => (
          <div key={index}>
            {/* Render your report data here */}
            <p>{report.donorId}</p>
            <p>{report.BloodBankId}</p>
            <p>{report.dateOfDonation}</p>
            <p>{report.TypeOfDonation}</p>
            <button
              key={report.id}
              onClick={() => handleButtonClick(report.id)}
            >
              Document ID: {report.id}
            </button>{" "}
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsD;
