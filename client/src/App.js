import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("localhost:5000/")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>MERN Stack App</h1>
      <p>Backend Response: {message}</p>
    </div>
  );
}

export default App;