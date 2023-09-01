import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import Modal from "./Modal";
import "./login.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import {db} from '../firebaseConfig'

const Test = () => {
  
  //setUser
  const usersCollectionRef = collection(db, "users");
  const [userType, setuserType] = useState([]);
  useEffect(()=>{

    const getUsers = async () =>{

    } 
    getUsers()
  },[])
  
  
  
  const [pageInfo, setpageInfo] = useState("");






  const location = useLocation();
  console.log(location.pathname.slice(1));
  useEffect(() => {
    setpageInfo(location.pathname.slice(1));
    console.log(location.pathname.slice(1));
  }, [location.pathname]);
  

    
  const [regUser, setRegUser] = useState({
    email: "",
    password: "",
    displayName: "",
    phoneNumber: "",
  });
  const [loginModal, setloginModal] = useState(false);
  const [regModal, setregModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setuser] = useState({});
  const [modalShow, setmodalShow] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setuser(currentUser);
      // const displayName = currentUser.displayName;
      console.log(currentUser?.uid);
      console.log(currentUser?.displayName);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const register = async () => {
    try {
      console.log(regUser.email);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        regUser.email,
        regUser.password
      );
      const user = userCredential.user; // Get the user object from the userCredential

      const update = updateProfile(auth.currentUser, {
        displayName: regUser.displayName,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
        phoneNumber: regUser.phoneNumber,
      });
      

      console.log(user);

    } catch (error) {
      setErrorMessage(error.message);
      setmodalShow(true);
      console.log(error.message);
    }
  };

  const 
 
  const login = async () => {
    try {
      console.log(regUser.email);
      const user = await signInWithEmailAndPassword(
        auth,
        regUser.email,
        regUser.password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setmodalShow(true);
    }
  };
  const handleCloseModal = () => {
    setmodalShow(false);
  };

  const logout = async () => {
    await signOut(auth);
    console.log("account LogOut");
  };
  const onHandleChange = (e) => {
    setRegUser({
      ...regUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleState = () => {
    setloginModal(true);
    setregModal(false);
  };
  const handleStateC = () => {
    setregModal(true);
    setloginModal(false);
  };

  const getPageTitle = (pageInfo) => {
    switch (pageInfo) {
      case "bankLogin":
        return "Bank Login";
      case "donnarLogin":
        return "Donner Login";
      case "hosptialLogin":
        return "Hospital Login";
      default:
        return "Unknown Page";
    }
  };
  return (
    <div className="container">
      <div className="card">
        <h2>{getPageTitle(pageInfo).toUpperCase()}</h2>

        <div className="form">
          {!regModal && (
            <>
              <button className="button" onClick={handleStateC}>
                Crete New Account
              </button>
            </>
          )}
          {!loginModal && (
            <>
              <button className="button" onClick={handleState}>
                Log in{" "}
              </button>
            </>
          )}

          {loginModal && (
            <>
              <label htmlFor="">Email</label>
              <input type="" name="email" onChange={onHandleChange} />
              <label htmlFor="">Password</label>
              <input type="" name="password" onChange={onHandleChange} />
              <button className="button" onClick={login}>
                Login
              </button>
            </>
          )}

          {regModal && (
            <>
              <label htmlFor="">Email</label>
              <input type="" name="email" onChange={onHandleChange} />
              <label htmlFor="">Password</label>
              <input type="" name="password" onChange={onHandleChange} />
              <label htmlFor="">Name</label>
              <input type="" name="displayName" onChange={onHandleChange} />
              <label htmlFor="">phone</label>
              <input type="" name="phoneNumber" onChange={onHandleChange} />
              <button className="button" onClick={register}>
                Register
              </button>
            </>
          )}
          {/* <button onClick={register}>Create User</button> */}

          <button className="button" onClick={logout}>
            logout
          </button>
          {/* <button onClick={logout}>Log Out</button> */}

          <div>{user?.email}</div>
        </div>

        {/* <br />
      <br />
      <label htmlFor="">Email</label>
      <input type="email" />
      <br />
      <label htmlFor="">Password</label>
      <input type="password" />
      <br />
    <button>Create User</button> */}
      </div>
      {modalShow && <Modal error={errorMessage} onClose={handleCloseModal} />}
    </div>
  );
};

export default Test;
