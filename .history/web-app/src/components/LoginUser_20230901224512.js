import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../firebaseConfig";

const LoginUser = () => {
  const [pageInfo, setpageInfo] = useState("");
  const [modalShow, setmodalShow] = useState(false);

  const onHandleChange = (e) => {
    const [regUser, setRegUser] = useState({
      email: "",
      password: "",
    });

    const Login = async () => {
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
    setRegUser({
      ...regUser,
      [e.target.name]: e.target.value,
    });
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
    </div>
  );
};

export default LoginUser;
