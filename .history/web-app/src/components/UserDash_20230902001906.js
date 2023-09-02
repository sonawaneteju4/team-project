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
      const q = query(usersDataRef, where("uId", "==", user));
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
    <button onClick={logout}>logout</button>
  </div>;
};

export default UserDash;
