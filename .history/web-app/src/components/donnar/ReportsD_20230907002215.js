import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';

const ReportsD = () => {
    const [reports, setreports] = useState([]);
    const dataRef = collection(db,"BloodReports")

    useEffect(()=>{
        const q = query(dataRef, where("donorId", '==' , localStorage.getItem('userId')))
        const getResult= async() =>{

            const data = await getDocs(q);
            console.log(data)
            set

        }
        getResult()
    })



  return (
    <div>ReportsD</div>
  )
}

export default ReportsD