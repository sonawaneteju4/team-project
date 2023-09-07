import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';

const StockMang = () => {
  const collectionRef = collection(db, "BloodReports");
  const q = query(collectionRef, where("BloodBankId", "==" , "hjPKfVL4DfVqL1dE8XkiCvxnQCf1"))
  const [bloodGroupCounts, setBloodGroupCounts] = useState({});

  useEffect(() => {
    const getBloodGroupCounts = async() => {
      try {
        const querySnapshot = await getDocs(q);
        const counts = {};

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const bloodGroup = data.BloodGroup;

          // If the blood group is not already in the counts object, initialize it with a count of 1
          if (!counts[bloodGroup]) {
            counts[bloodGroup] = 1;
          } else {
            // If the blood group is already in the counts object, increment its count
            counts[bloodGroup]++;
          }
        });

        // Set the blood group counts in state
        setBloodGroupCounts(counts);
        console.log(bloodGroupCounts)
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    }
    
    // Call the function to get blood group counts
    getBloodGroupCounts();

  }, [])

  // Define blood group labels
  const bloodGroupLabels = ["A+ve", "A-ve", "B+ve", "B-ve", "O+ve", "O-ve", "AB+ve", "AB-ve"];

  return (
    <div className='' style={{margin: "10px"}}>
      <h1 style={{textAlign: 'center', color: 'white'}}>Blood Stock</h1>
      <hr />
      <div>

      {bloodGroupLabels.map((bloodGroupLabel) => (
        <div style={{color: 'white', fontSize: "50px", textAlign: 'center'}} key={bloodGroupLabel}>
          {bloodGroupLabel}: {bloodGroupCounts[bloodGroupLabel] || 0}
        </div>
      ))}
      </div>
    </div>
  )
}

export default StockMang;
