import React, { useState } from "react";
import UnAuthApp from "./UnAuthApp";

const initState = () => {
  try {
    return JSON.parse(localStorage.getItem("isLoggedIn"));
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
    <UnAuthApp login={login}></UnAuthApp>
  );
};

export default App;
