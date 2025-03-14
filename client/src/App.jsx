
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import "nes.css/css/nes.min.css";
import Login from "./components/login";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/login" element = {<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;