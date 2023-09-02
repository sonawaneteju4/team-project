import React, { useEffect } from 'react'
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { getDocs, query } from 'firebase/firestore';

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
    const q = query(usersCollectionRef, where("uId", "==", localStorage.getItem('userId')));
    const getUserDetails = async () =>{
      const userInfo = await getDocs(q);
    }
  })


  return (
    <div>DonnarDashboard</div>
  )
}

export default DonnarDashboard