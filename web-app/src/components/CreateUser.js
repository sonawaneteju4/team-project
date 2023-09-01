import React from "react";
import { useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebaseConfig";

const CreateUser = () => {
  const [reg, setReg] = useState({email :"" ,password: "123"})
  // const [user, setuser] = useState({});
  

  const register = async() => {
    try {
      const user = await 
      
      (auth , reg.email , reg.password);
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }

  }

  const handleChange = (e) =>{
    setReg({...reg , [e.target.name]: e.target.value})
  }


  return (
    <div>
      <div>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange}></input>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name='password' onChange={handleChange}></input>
      </div>
      <div>
        <button onClick={register}>CreateUser</button>
      </div>
      {/* <p>{reg.email}</p>
      <p>{reg.password}</p> */}
    </div>
  );
};

export default CreateUser;
