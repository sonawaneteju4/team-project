import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'

const HospitalReq = () => {
const[ReqData, setReqData]=useState([])
const DataRef=collection(db,'HospitalReq')
useEffect(() => {
  const q=query(DataRef,where ('hospitalId','==',localStorage.getItem('userId')))
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
      {items.b}
    </div>
    )
    )}
   </> 
  )
      }

export default HospitalReq