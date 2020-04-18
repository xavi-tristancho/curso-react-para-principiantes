import React, { useState } from "react";
import request from "../utils/request";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Submit");

    console.log(credentials);

    request("ApplicationUsers/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          value={credentials.email}
        ></input>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          value={credentials.password}
        ></input>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
