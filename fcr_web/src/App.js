import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginContextProvider from "../src/components/context/loginContext.js";
import HomePage from "./components/HomePage/HomePage.js";
import "./App.css";
const ObituarioPage = lazy(() =>
  import("./components/ObituarioPage/ObituarioPage.js")
);
const PersonPage = lazy(() => import("./components/PersonPage/PersonPage.js"));
const LoginPage = lazy(() => import("./components/LoginPage/LoginPage.js"));
const ManagerPage = lazy(() =>
  import("./components/ManagerPage/ManagerPage.js")
);
const Protected = lazy(() => import("./components/Protected/protected.js"));

function App() {
  function Loading() {
    return <div className="loader" role="status"></div>;
  }
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <LoginContextProvider>
          <h6 id="lowResolutionDeviceAlert">
            Este sitio no se puede visualizar en dispositivos con resolución
            menor a 320 pixeles.
          </h6>
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
    </Suspense>
  );
}

export default App;
