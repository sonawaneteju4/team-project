import React from 'react'

const HospitalDashboard = () => {
  const navigate = useNavigate()
  const logout = async () => {
    localStorage.removeItem("userId");
    await signOut(auth);
    console.log("account LogOut");
    navigate("/");

  };
  return (
    <div>HospitalDashboard</div>
  )
}

export default HospitalDashboard