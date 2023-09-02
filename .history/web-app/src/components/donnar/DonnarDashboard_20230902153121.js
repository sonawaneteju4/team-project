import React from 'react'
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const DonnarDashboard = () => {
    onAuthStateChangedtateChanged(
    auth,
    (user) => {
      if (user) {
        const uid = user.uid;
        setcurrUser(user);
        setuserId(user.uid);
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