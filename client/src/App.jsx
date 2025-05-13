import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopEmailDomains from "./pages/TopEmailDomains";

// Динамический импорт страниц и layouts
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const AuthTest = lazy(() => import("./pages/AuthenticationTest"));
const AuthLayout = lazy(() => import("./layouts/authLayout"));
const MainLayout = lazy(() => import("./layouts/mainLayout"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="nes-balloon from-left is-dark">Загрузка...</div>}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/protected" element={<AuthTest />} />
            <Route path="/emails" element={<TopEmailDomains />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
