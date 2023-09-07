import { collection, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { db } from '../../firebaseConfig';

const StockMang = () => {
  const collectionRef = collection(db, "BloodReports");
  const q = query(collection, where("BloodBankId", "==" , "hjPKfVL4DfVqL1dE8XkiCvxnQCf1"))
  const bloodGroupCounts = {};


  useEffect(()=>{
    const querySnapshot = await getDocs(q);

  },[])
  return (
    <div>
      <div>A+</div>
      <div>A-</div>
      <div>B+</div>
      <div>B-</div>
      <div>O+</div>
      <div>O-</div>
      <div>Ab+</div>
      <div>Ab-</div>
    </div>
  )
}

export default StockMang