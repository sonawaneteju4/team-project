import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const ReportsD = () => {
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
    }));      setreports(reportsData);
      console.log(reportsData);
    };
    getResult();
  }, []);

  // Function to handle the button click event
function handleClick(event) {
  // Get the reportId from the data attribute of the clicked button
  const reportId = event.target.getAttribute('data-report-id');

  // Set the reportId in localStorage
  localStorage.setItem('reportId', reportId);

  // You can also do something with the reportId if needed
  // For example, you can redirect to a different page using it
  // window.location.href = '/some-other-page.html?reportId=' + reportId;
}

// Add a click event listener to the button
const reportButton = document.getElementById('reportButton');
reportButton.addEventListener('click', handleClick);

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
            <button id="reportButton" data-report-id="{report.id}">Get Report</button>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsD;
