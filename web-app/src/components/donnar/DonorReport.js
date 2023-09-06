import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'

const DonorReport = () => {
    const [ReqData,setReqData]=useState([])
    const DataRef=collection(db,'donorReport')
    useEffect(() => {
      const q=query(DataRef,where('uId','==',localStorage.getItem('userId')))
      const  getReport=async()=>{
        const data=await getDocs(q)
        console.log(data)
        console.log((items)=>{
            setReqData(items.data())
        })
      }
    getReport();
        
      },[])

  return (
    <div>
        {ReqData.map((items)=>(
            <div>

            </div>
        )
        )}
    </div>
  )
}

export default DonorReport