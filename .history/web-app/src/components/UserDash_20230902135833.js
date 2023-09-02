import React, { useEffect, useState } from "react";
import {  db } from "../firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";

const UserDash = () => {
  const auth = getAuth();
  const [currUser, setcurrUser] = useState([]);
  const [userId, setuserId] = useState("");
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
        setuserId(user.uid);
      } else {
        navigate("/");
      }
    },
    [currUser, userId]
  );

  useEffect(() => {
    const getUsers = async () => {
      const q = query(usersCollectionRef, where("uId", "==", userId));
      const q2 = query(usersDataRef, where("uId", "==", userId));
      try {
        const data = await getDocs(q2);
        const userInfo = await getDocs(q);
        setuserData(data);
        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    };
    getUsers();
  }, [setuserData]);

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
