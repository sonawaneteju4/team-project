import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const HospitalDashboard = () => {
  const navigate = useNavigate()
  const logout = async () => {
    localStorage.removeItem("userId");
    await signOut(auth);
    console.log("account LogOut");
    navigate("/");

  };
  return (
    <div>HospitalDashboard
            <button onClick={logout}>Logout</button>
    </div>
  )
}

export default HospitalDashboard