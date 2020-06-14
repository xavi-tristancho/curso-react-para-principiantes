import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const UnAuthApp = ({ login }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login login={login}></Login>
        </Route>
        <Route path="/register">
          <Register login={login}></Register>
        </Route>

        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default UnAuthApp;
