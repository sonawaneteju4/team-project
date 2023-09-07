import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'

const HospitalReq = () => {
const[ReqData, setReqData]=useState([])
const DataRef=collection(db,'HospitalReq')
const q=query(DataRef,where ('bankId','==',localStorage.getItem('userId')))
useEffect(() => {
  const HospitalReq=async()=>{
    const data=await getDocs(q)
    console.log(data)
    data.forEach((items) => {
      setReqData(items.data())
  })

  console.log(ReqData)
}
HospitalReq();
},[])

  return (
    <>
      {ReqData.map ((items)=>(
    <div>
      {items.data().bankId}
    </div>
    )
    )}
   </> 
  )
      }

export default HospitalReq