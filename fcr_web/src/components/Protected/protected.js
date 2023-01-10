import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/loginContext.js";

const Protected = ({ children }) => {
  useEffect(() => {
    checkToken();
  });
  const navigate = useNavigate();
  const { checkToken, isLoggedIn } = useContext(LoginContext);
  if (isLoggedIn === false) {
    return navigate("/");
  } else {
    return children;
  }
};
export default Protected;
