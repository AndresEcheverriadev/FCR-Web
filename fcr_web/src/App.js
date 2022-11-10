import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ObituarioPage from "./components/ObituarioPage/ObituarioPage";
import PersonPage from "./components/PersonPage/PersonPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ManagerPage from "./components/ManagerPage/ManagerPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/obituario" element={<ObituarioPage />} />
          <Route path="/:personId" element={<PersonPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
