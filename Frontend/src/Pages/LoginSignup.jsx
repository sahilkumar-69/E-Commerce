import React, { useState } from "react";
import "./CSS/loginsignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:4343/register-user",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })

    const dt = await resp.json()
    if(dt.success){
      localStorage.setItem("auth_token",dt.token)
      window.location.replace("/")
    }
    else{
      alert(dt.message)
    }
    console.log(dt)
  };

  const login = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:4343/login",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })

    const dt = await resp.json()
    if(dt.success){
      localStorage.setItem("auth_token",dt.token)
      window.location.replace("/")
    }
    else{
      alert(dt.message)
    }
    console.log(dt)
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Signup" ? (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleOnChange}
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleOnChange}
            placeholder="Password"
          />
        </div>
        <button onClick={state === "Signup" ? signup : login}>Continue</button>
        {state === "Signup" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Log In </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an Account?{" "}
            <span onClick={() => setState("Signup")}>Sign Up </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
