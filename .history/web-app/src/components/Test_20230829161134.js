import React, { useState, useEffect } from "react";
import {createUserWithEmailAndPassword, onAuthStateChangedch, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from '../firebaseConfig'
import Modal from "./Modal";

const Test = () => {
  
  const [regUser, setRegUser] = useState({email :"", password : ""})
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setuser] = useState({})
  const [modalShow, setmodalShow] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setuser(currentUser);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);
  
  const register = async(e) => {
    e.preventDefault();
    try {
      console.log(regUser.email)
      const user = await createUserWithEmailAndPassword(auth,  regUser.email , regUser.password)
      console.log(user )
    } catch (error) {
      setErrorMessage(error.message);
      setmodalShow(true);
      console.log(error.message);
    }
  };

  const login = async() => {
    try {
      console.log(regUser.email)
      const user = await signInWithEmailAndPassword(auth,  regUser.email , regUser.password)
      console.log(user )
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setmodalShow(true);
    }
  };
  const handleCloseModal = () => {
    setmodalShow(false);
  };

  const logout =async () => {
    await signOut(auth)
    console.log("account LogOut")
  };
  const onHandleChange = (e) => {
    setRegUser({
      ...regUser,
      [e.target.name]: e.target.value,
    });
  };
  

  return (
    <div>
        <label htmlFor="">Email</label>
        <input type="" name="email" onChange={onHandleChange} />
        <br />
        <label htmlFor="" >Password</label>
        <input type="" name="password" onChange={onHandleChange} />
        <br />
        <button onClick={register}>Create User</button>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Log Out</button>


        <div>
          {user?.email}
        </div>
        {modalShow && <Modal error={errorMessage} onClose={handleCloseModal} />}


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
  );
};

export default Test;
