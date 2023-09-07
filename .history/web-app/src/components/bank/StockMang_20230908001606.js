import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { db } from '../../firebaseConfig';

const StockMang = () => {
  const collectionRef = collection(db, "BloodReports");
  const q = query(collection, where("BloodBankId", "==" , "hjPKfVL4DfVqL1dE8XkiCvxnQCf1"))
  const bloodGroupCounts = {};


  useEffect(()=>{
    const getBloodGroupCounts() {
      try {
        const querySnapshot = await getDocs(q);
    
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const bloodGroup = data.BloodGroup;
    
          // If the blood group is not already in the counts object, initialize it with a count of 1
          if (!bloodGroupCounts[bloodGroup]) {
            bloodGroupCounts[bloodGroup] = 1;
          } else {
            // If the blood group is already in the counts object, increment its count
            bloodGroupCounts[bloodGroup]++;
          }
        });
    
        // Now, bloodGroupCounts will contain the counts of each blood group
        console.log(bloodGroupCounts);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    }
    
    // Call the function to get blood group counts
    getBloodGroupCounts();

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