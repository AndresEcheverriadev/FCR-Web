import React, { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { LoginContext } from "../context/loginContext.js";
import "./LoginPage.css";

function LoginPage() {
  const password = `${process.env.REACT_APP_PASSOBITUARIO}`;
  const navigate = useNavigate();
  const input = document.getElementById("inputPassManager");
  const [passer, setPasser] = useState({ pass: "" });
  const { logIn } = useContext(LoginContext);
  function login() {
    if (passer.pass === password) {
      logIn();
      navigate("/manager");
      input.value = "";
    } else {
      input.value = "";
      alert("Password incorrecto");
    }
  }
  return (
    <div className="loginPageMainWrapper">
      <NavLink to="/" className="loginLogoContainer">
        <img src={logo} alt="" />
      </NavLink>
      <div className="loginInputContainer">
        <h4>Login Obituario</h4>
        <h5>Introduzca su contraseña</h5>
        <input
          type="password"
          id="inputPassManager"
          onChange={(e) => setPasser({ pass: e.target.value })}
        />
        <button onClick={login}>Entrar</button>
      </div>
    </div>
  );
}

export default LoginPage;
