
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import "nes.css/css/nes.min.css";
import Login from "./pages/login";
import Register from "./pages/register";
import AuthTest from "./pages/AuthenticationTest";
import AuthLayout from "./layouts/authLayout";
import MainLayout from "./layouts/mainLayout";

function App() {


  return (
    <Router>
      <Routes>

        <Route element={<AuthLayout/>}>
          <Route path="/login" element = {<Login/>} />
          <Route path="/register" element = {<Register/>} />
        </Route>
        <Route element={<MainLayout/>}>
          <Route path="/protected" element = {<AuthTest/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;