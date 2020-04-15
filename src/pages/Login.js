import React from "react";
import request from "../utils/request";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log("Submit");

    console.log(this.state);

    request("ApplicationUsers/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="email"
            name="email"
            onChange={(e) => this.setState({ email: e.target.value })}
            value={this.state.email}
          ></input>
          <input
            type="password"
            name="password"
            onChange={(e) => this.setState({ password: e.target.value })}
            value={this.state.password}
          ></input>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    );
  }
}

export default Login;
