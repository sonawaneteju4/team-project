import React from "react";

const LoginUser = () => {

  const onHandleChange = (e) => {
    setRegUser({
      ...regUser,
      [e.target.name]: e.target.value,
    });
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
          <button className="button" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
