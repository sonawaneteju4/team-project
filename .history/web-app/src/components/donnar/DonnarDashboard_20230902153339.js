import React, { useEffect } from 'react'
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

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
    []
  );

  useEffect(()=>{
    const getUserDetails = async () =>{
      
    }
  })


  return (
    <div>DonnarDashboard</div>
  )
}

export default DonnarDashboard