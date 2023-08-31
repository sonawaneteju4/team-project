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

const Test = () => {
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
      console.log(currentUser.uid);
      console.log(currentUser?.displayName);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const register = async (e) => {
    e.preventDefault();
    try {
      console.log(regUser.email);
      const user = await createUserWithEmailAndPassword(
        auth,
        regUser.email,
        regUser.password
      );
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

  return (
    <div className="container">
      <div className="card">
        <h2>Login Form</h2>

        <div className="form">
          <button>Crete New Account</button>

          <button>Log in </button>

          {loginModal && (
            <div>
              <label htmlFor="">Email</label>
              <input type="" name="email" onChange={onHandleChange} />
              <label htmlFor="">Password</label>
              <input type="" name="password" onChange={onHandleChange} />
              <button onClick={login}>Login</button>
            </div>
          )}

          {regModal && (
            <div>
              <label htmlFor="">Email</label>
              <input type="" name="email" onChange={onHandleChange} />
              <label htmlFor="">Password</label>
              <input type="" name="password" onChange={onHandleChange} />
              <label htmlFor="">Name</label>
              <input type="" name="displayName" onChange={onHandleChange} />
              <label htmlFor="">phone</label>
              <input type="" name="phoneNumber" onChange={onHandleChange} />
              <button onClick={register}>Register</button>
            </div>
          )}
          {/* <button onClick={register}>Create User</button> */}

          <button onClick={logout}>logout</button>
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
