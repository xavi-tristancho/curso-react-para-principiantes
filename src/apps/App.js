import React, { useState } from "react";
import Login from "../pages/Login";

const initState = () => {
  try {
    return JSON.parse(localStorage.getItem("isLoggedIn")) ;
  } catch (e) {
    return false;
  }
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(initState());

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  return isLoggedIn ? (
    <p>Has iniciado sesión</p>
  ) : (
    <Login login={login}></Login>
  );
};

export default App;
