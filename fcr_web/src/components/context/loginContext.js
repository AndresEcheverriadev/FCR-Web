import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const LoginContext = createContext([]);
function LoginContextProvider({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const logIn = () => {
    const data = sessionStorage.getItem("adminLogged");
    if (!data) {
      sessionStorage.setItem(
        "adminLogged",
        JSON.stringify(`adminLogged${Date.now()}`)
      );
    } else {
      alert("Ya existe sesión");
    }
  };
  const logOut = () => {
    setisLoggedIn(false);
    sessionStorage.clear();
  };

  useEffect(() => {
    const data = sessionStorage.getItem("adminLogged");
    if (data) {
      setisLoggedIn(true);
    } else {
      logOut();
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setisLoggedIn, logIn, logOut }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
