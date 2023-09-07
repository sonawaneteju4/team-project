import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';

const ReportsD = () => {
    const [reports, setreports] = useState([]);
    const dataRef = collection(db,"BloodReports")

    useEffect(()=>{
        const q = query(dataRef, where("donorId", '==' , localStorage.getItem('userId')))
        const getResult= async() =>{

            const querySnapshot = await getDocs(q);
            const reportsData = querySnapshot.docs.map((doc) => doc.data());
            setreports(reportsData);
            console.log(reportsData);


        }
        getResult()
    },[])



  return (
    <div>ReportsD


        <div>
        {reports.map((report, index) => (
                <div key={index}>
                            <p>Document ID: {report.id}</p>

                    {/* Render your report data here */}
                    <p>{report.donorId}</p>
                    <p>{report.time}</p>
                    {/* Add more fields as needed */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default ReportsD