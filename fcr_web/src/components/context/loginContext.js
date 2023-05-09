import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext([]);
function LoginContextProvider({ children }) {
  const navigate = useNavigate();
  const logIn = () => {
    const data = sessionStorage.getItem("adminLogged");
    if (data == null) {
      sessionStorage.setItem(
        "token",
        JSON.stringify(`${process.env.REACT_APP_JWT_SECRET_KEY}`)
      );
    } else {
      alert("Ya existe sesión");
    }
  };
  const logOut = () => {
    sessionStorage.clear();
    return navigate("/");
  };

  const checkToken = () => {
    const data = sessionStorage.getItem("token");
    if (data) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  };

  const [isLoggedIn, setisLoggedIn] = useState();

  return (
    <LoginContext.Provider
      value={{ logIn, logOut, isLoggedIn, setisLoggedIn, checkToken }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
