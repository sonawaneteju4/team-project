import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { setUserId } from "firebase/analytics";

const UserDash = () => {
  const auth = getAuth();
  const [currUser, setcurrUser] = useState([]);
  const [userId, setuserId] = useState("")
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
        setuserId(user.uid)
        console.log(user.uid)
      } else {
        navigate("/");
      }
    },
    [currUser]
  );
  
  useEffect(() => {
    const getUsers = async () => {
      const q = query(usersDataRef, where("uId", "==", userId));
      getDocs(q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log('Document data:', doc.data());
        });
      })
      .catch((error) => {
        console.error('Error getting documents: ', error);
      }
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
