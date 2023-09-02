import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

const BankDashboard = () => {
  const navigate = useNavigate()
  const logout = async () => {
    localStorage.removeItem("userId");
    await signOut(auth);
    console.log("account LogOut");
    navigate("/");

  };
  return (
    <div>BankDashboard

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default BankDashboard