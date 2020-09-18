import React, { useState } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { useHistory } from "react-router-dom"

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const history = useHistory();

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", user)
      .then(res => {
        // console.log(res.data.payload )
        localStorage.setItem("token", res.data.payload);
        history.push("/bubbles-page")
      })
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={user.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChanges}
        />
        <button>Login</button>

      </form>

    </>
  );
};

export default Login;
