import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts/Poppins-Medium.woff2";
import "./fonts/Poppins-Medium.woff";
import "./fonts/Poppins-Medium.ttf";
import "./fonts/Poppins-SemiBold.woff2";
import "./fonts/Poppins-SemiBold.woff";
import "./fonts/Poppins-SemiBold.ttf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./indexResponsive.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
