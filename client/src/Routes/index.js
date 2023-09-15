import { lazy } from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import AppSuspense from "./Suspense";

const Signup = lazy(() => import("Pages/Signup"));
const LandingPage = lazy(() => import("Pages/LandingPage"));

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppSuspense>
              <LandingPage />
            </AppSuspense>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <AppSuspense>
              <Signup />
            </AppSuspense>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
