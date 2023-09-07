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
            seteports(reportsData);
            console.log(reportsData);


        }
        getResult()
    },[])



  return (
    <div>ReportsD


        {reports.map((items)=>{
            <>
            <div>
                {items.data().donorId}
            </div>
            </>
        })}
    </div>
  )
}

export default ReportsD