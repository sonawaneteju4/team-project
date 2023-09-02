import React, { useEffect } from 'react'
import { auth, db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './donarDash.css';

const DonnarDashboard = () => {
  useS
  const usersDataRef = collection(db, "donnarInfo");
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
  const logout = async () => {
    localStorage.removeItem('userId')
    await signOut(auth);
    console.log("account LogOut");
    navigate("/");
  };


  return (
    <div>
      <div className='logNav'>
            <button className='logoutBtn' onClick={logout}>logout</button> 
      </div>


    </div>
  )
}

export default DonnarDashboard