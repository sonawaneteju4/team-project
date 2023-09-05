import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged, signOut } from "firebase/auth";

const LogoutBar = () => {
  const Navigate = useNavigate()
  const logout = async () => {
    localStorage.removeItem("userId");
    await signOut(auth);
    console.log("account LogOut");
    Navigate("/");
  };

  return (
    <div>
      <div className="logNav">
        <button className="logoutBtn" onClick={logout}>
          logout
        </button>
      </div>
    </div>
  )
}

export default LogoutBar