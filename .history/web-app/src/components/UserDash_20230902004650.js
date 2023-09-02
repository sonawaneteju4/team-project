import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";

const UserDash = () => {
  const auth = getAuth();
  const [currUser, setcurrUser] = useState([]);
  const [userData, setuserData] = useState([]);
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "donnarInfo");

  onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        const uid = user.uid;
        setcurrUser(user);
      } else {
        navigate("/");
      }
    },
    [currUser]
  );

  useEffect(() => {
    const getUsers = async () => {
      try {
        const q = query(usersDataRef, where("uId", "==", currUser.uid));
        const data = await getDocs(cu);
        setuserData(data);
        console.log(data);
        
      } catch (error) {
        alert(error.message)
      }
    };
    getUsers();
  }, []);

  const logout = async () => {
    await signOut(auth);
    console.log("account LogOut");
    navigate("/");
  };

  return (
    <div>
      UserDash
      <div>{currUser.email}</div>
      <p>userData.uid</p>
      <p>userData.userName</p>
      <p>userData.</p>
      <p>userData.weight</p>
      <p>userData.</p>
      <p>userData.</p>
      <p>userData.</p>
      <p>userData.</p>
      <p>userData.</p>
      <p>userData.</p>
      <p>userData.</p>
      <p>userData.</p>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default UserDash;
