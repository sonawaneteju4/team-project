import React, { useEffect } from 'react'
import { auth, db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

const DonnarDashboard = () => {
  const usersDataRef = collection(db, "users");
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
    const q2 = query(usersDataRef, where("uId", "==", localStorage.getItem('userId')));
    const getUserDetails = async () =>{
      const data = await getDocs(q2);
    }
  })


  return (
    <div>DonnarDashboard</div>
  )
}

export default DonnarDashboard