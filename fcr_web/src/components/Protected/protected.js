import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../context/loginContext.js";

const Protected = ({ children }) => {
  const { isLoggedIn, logOut, setisLoggedIn } = useContext(LoginContext);
  useEffect(() => {
    const data = sessionStorage.getItem("adminLogged");
    if (data) {
      setisLoggedIn(true);
    } else {
      logOut();
    }
  });

  if (isLoggedIn === false) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default Protected;
