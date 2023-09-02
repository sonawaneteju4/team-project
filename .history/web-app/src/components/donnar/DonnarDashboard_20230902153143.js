import React from 'react'
import { auth } from '../../firebaseConfig';

const DonnarDashboard = () => {
    onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        const uid = user.uid;
      } else {
        navigate("/");
      }
    },
    [currUser, userId]
  );


  return (
    <div>DonnarDashboard</div>
  )
}

export default DonnarDashboard