import React, { useState } from "react";
import request from "../utils/request";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Input, Label } from "../ui/";
import { Languages } from "../components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 50px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
`;

const Login = ({ t, login }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    request("ApplicationUsers/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    })
      .then((res) => login())
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Box as="form" className="box" onSubmit={onSubmit}>
        <span style={{ textAlign: "center", marginBottom: 50, fontSize: 20 }}>
          {t("login.title")}
        </span>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          value={credentials.email}
        ></Input>
        <Label htmlFor="password">Contraseña</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          value={credentials.password}
        ></Input>

        <Button type="submit">Iniciar Sesión</Button>

        <Link to="/register">¿Aún no tienes cuenta? ¡Regístrate aquí!</Link>

        <Languages></Languages>
      </Box>
    </Container>
  );
};

export default withTranslation()(Login);
