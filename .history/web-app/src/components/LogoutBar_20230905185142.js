import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged, signOut } from "firebase/auth";
import './logout.css'
const LogoutBar = () => {
  const Navigate = useNavigate()
  const [handleLog, sethandleLog] = useState(false)

  onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        sethandleLog(true)
      }
    },
    []
  );

useEffect(() => {

  const logout = async () => {
    localStorage.removeItem("userId");
    await signOut(auth);
    console.log("account LogOut");
    Navigate("/");
  };
}, [])


  return (
    <div>
      {handleLog &&

        <div className="logNav">
        <button className="button" onClick={logout}>
          logout
        </button>
      </div>
      }
    </div>
  )
}

export default LogoutBar