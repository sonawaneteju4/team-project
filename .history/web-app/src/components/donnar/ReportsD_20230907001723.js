import { collection } from 'firebase/firestore';
import React, { useState } from 'react'

const ReportsD = () => {
    const [reports, setreports] = useState([]);
    const dataRef = collection(db,"BloodReports")



  return (
    <div>ReportsD</div>
  )
}

export default ReportsD