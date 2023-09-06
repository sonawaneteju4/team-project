import { collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../firebaseConfig'

const DonationReq = () => {
  const [ReqData, setReqData] = useState([])

  const DataRef =  collection(db , 'donationReq')

  const donationReq = () =>{

  }
  


  return (
    <div>
      
    </div>
  )
}

export default DonationReq