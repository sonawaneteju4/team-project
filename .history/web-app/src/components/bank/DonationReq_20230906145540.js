import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'

const DonationReq = () => {
  const [ReqData, setReqData] = useState([])
  const DataRef =  collection(db , 'donationReq')

  useEffect(()=>{

    const donationReq = async() =>{
      const q = query(DataRef , where('uId' ,'==' , localStorage.getItem('userId')))
      const data =  await getDocs(q)
      console.log(data)
    data.forEach((items) => {
      setReqData(items.data())
    })
    console.log(ReqData)
  }
  
  
})

  return (
    <div>
      
    </div>
  )
}

export default DonationReq