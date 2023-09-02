import React from 'react'

const BankDashboard = () => {
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