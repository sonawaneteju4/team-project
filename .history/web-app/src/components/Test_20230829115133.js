import React, { useState } from "react";

const Test = () => {
  const [regEmail, setregEmail] = useState("");
  const [regpass, setregPass] = useState("");

  const register = () => {};

  const login = () => {};

  const logout = () => {};

  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="email" onChange={(e)=>{setregEmail(event.target.value)}} />
        <br />
        <label htmlFor="">Password</label>
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
