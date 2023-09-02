import React from 'react'
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const DonnarDashboard = () => {

    const navigate = useNavigate()
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