import React, { useState } from "react";

const Test = () => {
  const [userEmail, setUserEmail] = useState("")
  const [userpass, setUserEmail] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userEmail, setUserEmail] = useState("")


  const register = () => {};

  const login = () => {};

  const logout = () => {};

  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="email" />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" />
        <br />
        <button>Create User</button>
      </form>

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
