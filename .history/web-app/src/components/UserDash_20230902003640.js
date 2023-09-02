import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";

const UserDash = () => {
  const auth = getAuth();
  const [currUser, setcurrUser] = useState([])
  const [userData, setuserData] = useState([])
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "donnarInfo");

  


  useEffect(() => {
    const getUsers = async () => {

      const q = query(usersDataRef, where("uId", "==", currUser.uid));
      const data = await getDocs(q)
      setuserData(data)
      console.log(data)
    };
    getUsers();
  }, []);





  const logout = async () => {
    await signOut(auth);
    console.log("account LogOut");
    navigate('/')
  };

  return <div>UserDash
    <div>
        {currUser.email}
    </div>
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
  </div>;
};

export default UserDash;
