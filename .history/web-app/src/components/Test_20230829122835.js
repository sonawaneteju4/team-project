import React, { useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebaseConfig'

const Test = () => {
  
  const [regUser, setRegUser] = useState({email :"", password : ""});
  
  const register = async(e) => {
    e.preventDefault();
    
    try {
      const user = await createUserWithEmailAndPassword(auth, regUser)
      console.log("login user "+ user )
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = () => {};

  const logout = () => {};

 const onHandleChange = (e) => {
  setRegUser({...regUser,[e.target.name]:[e.target.value]})
 } 

  return (
    <div>
        <label htmlFor="">Email</label>
        <input type="email" onChange={onHandleChange} />
        <br />
        <label htmlFor="" >Password</label>
        <input type="password" onChange={onHandleChange} />
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
