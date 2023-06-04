import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginContextProvider from "../src/components/context/loginContext.js";
import HomePage from "./components/HomePage/HomePage";
import ObituarioPage from "./components/ObituarioPage/ObituarioPage";
import PersonPage from "./components/PersonPage/PersonPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ManagerPage from "./components/ManagerPage/ManagerPage";
import Protected from "./components/Protected/protected";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/obituario" element={<ObituarioPage />} />
            <Route path="/obituario/:personId" element={<PersonPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/manager"
              element={
                <Protected>
                  <ManagerPage />
                </Protected>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
