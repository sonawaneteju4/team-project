import React from "react";
import { auth } from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserDash = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
      // User is signed out
      // ...
      navigate("/");
    }
  });

  return <div>UserDash</div>;
};

export default UserDash;
