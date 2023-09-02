import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const BankDashboard = () => {
  useNavigate()
  const logout = async () => {
    localStorage.removeItem("userId");
    await signOut(auth);
    console.log("account LogOut");
    navigate("/");

  };
  return (
    <div>BankDashboard</div>
  )
}

export default BankDashboard