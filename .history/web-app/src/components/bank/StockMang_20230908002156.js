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
  const bloodGroupLabels = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  return (
    <div>
      {bloodGroupLabels.map((bloodGroupLabel) => (
        <div key={bloodGroupLabel}>
          {bloodGroupLabel}: {bloodGroupCounts[bloodGroupLabel] || 0}
        </div>
      ))}
    </div>
  )
}

export default StockMang;
