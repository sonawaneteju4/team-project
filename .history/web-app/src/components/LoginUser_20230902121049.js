import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import "./login.css";
import { auth } from "../firebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";

const LoginUser = () => {
  const [loginUser, setloginUser] = useState({
    email: "",
    password: "",
  });
  const [pageInfo, setpageInfo] = useState("");
  const [modalShow, setmodalShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const nav = useNavigate();



  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
  
      nav('/dashboard')
    }
  },[]);
  useEffect(() => {
    setpageInfo(location.pathname.slice(1));
    console.log(location.pathname.slice(1));
  }, [location.pathname]);

  const Login = async () => {
    try {
      console.log(loginUser.email);
      const user = await signInWithEmailAndPassword(
        auth,
        loginUser.email,
        loginUser.password
      );
      localStorage.setItem('userId', userId);
      nav('/dashboard')
      console.log(user);
      
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setmodalShow(true);
    }
  };

  const onHandleChange = (e) => {
    setloginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleCloseModal = () => {
    setmodalShow(false);
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
          <label htmlFor="">Email</label>
          <input type="" name="email" onChange={onHandleChange} />
          <label htmlFor="">Password</label>
          <input type="" name="password" onChange={onHandleChange} />
          <button className="button" onClick={Login}>
            Login
          </button>
        </div>
      </div>
      {modalShow && <Modal error={errorMessage} onClose={handleCloseModal} />}
    </div>
  );
};

export default LoginUser;
