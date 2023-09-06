import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'

const DonationReq = () => {
  const [ReqData, setReqData] = useState([])
  const DataRef =  collection(db , 'DonationReq')
  useEffect(()=>{

    const q = query(DataRef , where('bankId' ,'==' ,localStorage.getItem('userId') ))

    const donationReq = async() =>{
      const data =  await getDocs(q)
      console.log(data)
    data.forEach((items) => {
      setReqData(items.data())
    })
    console.log(ReqData)
  }
  donationReq();
  
},[])

  return (
    <div>
    
      
    </div>
  )
}

export default DonationReq