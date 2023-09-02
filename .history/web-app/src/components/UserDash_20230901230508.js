import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserDash = () => {
  const auth = getAuth();
  const [currUser, setcurrUser] = useState([])
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
        setcurrUser(user);
      const uid = user.uid;
    } else {
      navigate("/");
    }
  },[currUser]);

  const logout = async () => {
    await signOut(auth);
    console.log("account LogOut");
  };

  return <div>UserDash
    <div>
        {currUser.email}
    </div>
  </div>;
};

export default UserDash;