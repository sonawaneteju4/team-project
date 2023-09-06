import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
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

  onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        const uid = user.uid;

        nav("/dashboard");
      }
    },
    []
  );
  useEffect(() => {
    setpageInfo(location.pathname.slice(1));
    console.log(location.pathname.slice(1));
  }, [location.pathname]);

  const Login = async (e) => {
    e.preventDefault();
    try {
      console.log(loginUser.email);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginUser.email,
        loginUser.password
      );
      const user = userCredential.user;
      localStorage.setItem("userId", user.uid);
      nav("/dashboard");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setmodalShow(true);
    }
  };




  const resetPass= async() =>{
    try {
      const reset = sendPasswordResetEmail(auth, loginUser.email)
      alert("Password Reset Link Send To Your Email")

    } catch (error) {
      alert(error.message)
    }
  }
  const onHandleChange = (e) => {
    setloginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleCloseModal = () => {
    setmodalShow(false);
  };
  const handleCreateAccount = () => {
    if (location.pathname.slice(1) === "bankLogin") {
      nav("/bankReg");
    } else if (location.pathname.slice(1) === "donarLogin") {
      nav("/donarReg");
    } else  {
      nav("/hosptialReg");
    }
  };
  const getPageTitle = (pageInfo) => {
    switch (pageInfo) {
      case "bankLogin":
        return " Blood Bank Login";
      case "donarLogin":
        return "Donor Login";
      case "hosptialLogin":
        return "Hospital Login";
      default:
        return "Unknown Page";
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="card">
          <h2>{getPageTitle(pageInfo).toUpperCase()}</h2>

          <form className="form" onSubmit={Login}>
            <label htmlFor="">Email</label>
            <input type="email" name="email" onChange={onHandleChange} required/>
            <label htmlFor="">Password</label>
            <input type="password" name="password" onChange={onHandleChange} required/>
            <button className="button" >
              Login
            </button>
            <button className="button">
              Create New Account
            </button>
          </form>
          <h5>Forget Password... click here</h5>
        </div>
        {modalShow && <Modal error={errorMessage} onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default LoginUser;
