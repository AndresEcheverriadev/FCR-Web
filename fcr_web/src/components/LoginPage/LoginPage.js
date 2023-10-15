import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./LoginPage.css";
import { AuthService } from "../../Services/AuthService";

function LoginPage() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const auth = await AuthService.login(mail, password);
    if (auth.success === true) {
      navigate("/manager");
    } else {
      alert("Password incorrecto");
      setMail("");
      setPassword("");
      window.location.reload(false);
    }
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
          <title>Servicios Funerarios Cristo Rey Angol</title>
        </Helmet>
      </HelmetProvider>
      <div className="loginPageMainWrapper">
        <NavLink to="/" className="loginLogoContainer">
          <img src={logo} alt="" />
        </NavLink>
        <div className="loginInputContainer">
          <h4>Login Obituario</h4>
          <h5>Introduzca sus credenciales</h5>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setMail(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <button onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
