import React from 'react'

const StockMang = () => {
  const bloodBankId = "hjPKfVL4DfVqL1dE8XkiCvxnQCf1"; // Replace with your BloodBankId

// Create a reference to the Firestore collection
const collectionRef = collection(db, "your-collection-name");

// Query the documents with the specified BloodBankId
const query = query(collectionRef, where("BloodBankId", "==", bloodBankId));

// Initialize an object to store the blood group counts
const bloodGroupCounts = {};

// Execute the query and process the results
const querySnapshot = await getDocs(query);
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

// Now, bloodGroupCounts will contain the counts of each blood group for the specified BloodBankId
console.log(bloodGroupCounts);

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