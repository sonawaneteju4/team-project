import React from 'react'

const StockMang = () => {
  const collectionRef = collection(db, collectionName);

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