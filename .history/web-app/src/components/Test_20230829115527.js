import React, { useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'

const Test = () => {
  const [regEmail, setregEmail] = useState("");
  const [regpass, setregPass] = useState("");

  const register = async() => {
    try {
      const user = await createUserWithEmailAndPassword()
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
        <input type="password" />
        <br />
        <button>Create User</button>
      </form>

      <br />
      <br />
      <label htmlFor="">Email</label>
      <input type="email" />
      <br />
      <label htmlFor="">Password</label>
      <input type="password" />
      <br />
      <button>Create User</button>
    </div>
  );
};

export default Test;
