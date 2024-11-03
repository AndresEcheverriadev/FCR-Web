import React, { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LoginContextProvider from "../src/components/context/loginContext.js";
import HomePage from "./components/HomePage/HomePage.js";
import { analyticService } from "./Services/AnalyticService.js";
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
  let location = useLocation();

  function Loading() {
    return <div className="loader" role="status"></div>;
  }

  useEffect(() => {
    analyticService.pageTrackingListen();
  }, [location]);

  return (
    <Suspense fallback={<Loading />}>
      <LoginContextProvider>
        <h6 id="lowResolutionDeviceAlert">
          Este sitio no se puede visualizar en dispositivos con resolución menor
          a 320 pixeles.
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
    </Suspense>
  );
}

export default App;
