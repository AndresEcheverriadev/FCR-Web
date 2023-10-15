import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/loginContext.js";

const Protected = ({ children }) => {
  const { isLoggedIn, checkTokenExist } = useContext(LoginContext);

  checkTokenExist();

  if (isLoggedIn === false) {
    return <Navigate replace={true} to="/login" />;
  } else {
    return children;
  }
};
export default Protected;
