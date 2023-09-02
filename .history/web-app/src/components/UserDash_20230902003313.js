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

  onAuthStateChanged(auth, (user) => {
    if (user) {
        setcurrUser(user);
      const uid = user.uid;

    } else {
      navigate("/");
    }
  },[currUser]);



  useEffect(() => {
    const getUsers = async () => {
      const user = currUser.uid;
      console.log(user)
      const q = query(usersCollectionRef, where("uId", "==", 1));
      const data = await getDoc(q)
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
