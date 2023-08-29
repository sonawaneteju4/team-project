import React, { useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebaseConfig'

const Test = () => {
  const 
  const [regEmail, setregEmail] = useState("");
  const [regpass, setregPass] = useState("");

  const register = async() => {
    try {
      const user = await createUserWithEmailAndPassword(auth, regEmail ,regpass)
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = () => {};

  const logout = () => {};

  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="email" onChange={(event)=>{setregEmail(event.target.value)}} />
        <br />
        <label htmlFor="" >Password</label>
        <input type="password" onChange={(event)=>{setregPass(event.target.value)}} />
        <br />
        <button onClick={register}>Create User</button>
      </form>

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
