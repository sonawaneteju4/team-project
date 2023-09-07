import { collection, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';

const ReportsD = () => {
    const [reports, setreports] = useState([]);
    const dataRef = collection(db,"BloodReports")

    useEffect(()=>{
        const q = query(dataRef, wh)

    })



  return (
    <div>ReportsD</div>
  )
}

export default ReportsD