import React, { useEffect, useState } from "react";
import {  db } from "../firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";

const UserDash = () => {
  const auth = getAuth();
  const [currUser, setcurrUser] = useState([]);
  const [userId, setuserId] = useState("");
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");

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
      const q = query(usersCollectionRef, where("uId", "==", localStorage.getItem('userId')));
      try {
        const userInfo = await getDocs(q);
        userInfo.forEach(item => {
          if(item.data().type == "donar"){
            navigate('/donarDash')
          }else if(item.data().type == 'hospital'){
            navigate('/hospitalDash')
          }else if(item.data().type == 'bank'){
            navigate('/dashboard/bankDash')
          }else{
            navigate('/')
          }
          console.log(item.data());
        });
      } catch (error) {
        alert(error.message);
        navigate()
      }
    };
    getUsers();
  }, []);

  const logout = async () => {
    localStorage.removeItem('userId')
    await signOut(auth);
    alert("account LogOut");
    navigate("/");
  };

  return (
    <>
     
    </>
  );
};

export default UserDash;
