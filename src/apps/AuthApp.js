import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Customers from "../pages/Customers";
import { AuthPage } from "../ui";

const AuthApp = ({ login }) => {
  return (
    <Router>
      <AuthPage>
        <Switch>
          <Route path="/" exact>
            <Customers login={login}></Customers>
          </Route>

          <Redirect to="/"></Redirect>
        </Switch>
      </AuthPage>
    </Router>
  );
};

export default AuthApp;
