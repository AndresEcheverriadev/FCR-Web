import React from "react";
import { useState } from "react";

export const LoginContext = React.createContext();

function LoginContextProvider({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(null);

  const checkTokenExist = () => {
    alert("checking");
    const token = sessionStorage.getItem("token");
    if (!token) {
      setisLoggedIn(false);
    } else {
      setisLoggedIn(true);
    }
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, checkTokenExist }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
