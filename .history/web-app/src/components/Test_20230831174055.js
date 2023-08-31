import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import Modal from "./Modal";
import "./login.css";

const Test = () => {
  const [regUser, setRegUser] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setuser] = useState({});
  const [modalShow, setmodalShow] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setuser(currentUser);
      // console.log(currentUser.uid)
      
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
      console.log(user);
      console.log("Heey"+user?.displayName);
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
          <label htmlFor="">Email</label>
          <input type="" name="email" onChange={onHandleChange} />
          <label htmlFor="">Password</label>
          <input type="" name="password" onChange={onHandleChange} />
          {/* <button onClick={register}>Create User</button> */}
          <div>
          <button onClick={register}>Register</button>

          </div>
          <div>
          <button onClick={login}>Login</button>
          </div>
          <div>
          <button onClick={logout}>logout</button>
          </div>
          {/* <button onClick={logout}>Log Out</button> */}

          <div>{user?.email}</div>
          {modalShow && (
            <Modal error={errorMessage} onClose={handleCloseModal} />
          )}
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
    </div>
  );
};

export default Test;
