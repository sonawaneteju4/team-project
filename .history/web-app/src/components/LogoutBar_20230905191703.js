import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged, signOut } from "firebase/auth";
import './logout.css'
const LogoutBar = () => {
  const Navigate = useNavigate()
  const [handleLog, sethandleLog] = useState();

  onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        sethandleLog(true)
      }
    },
    []
  );




  return (
    <div>
      {handleLog &&

        <>
        </>
      }
    </div>
  )
}

export default LogoutBar