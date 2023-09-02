import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDoc } from "firebase/firestore";

const UserDash = () => {
  const auth = getAuth();
  const [currUser, setcurrUser] = useState([])
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "donnarInfo");

  onAuthStateChanged(auth, (user) => {
    if (user) {
        setcurrUser(user);
      const uid = user.uid;
      const q = query(citiesRef, where("state", "==", "CA"));

    } else {
      navigate("/");
    }
  },[currUser]);



  useEffect(() => {
    const getUsers = async () => {
      const data = await getDoc(usersDataRef)
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