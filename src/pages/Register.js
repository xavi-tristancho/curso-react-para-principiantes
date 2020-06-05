import React, { useState } from "react";
import request from "../utils/request";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

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

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
`;

const Label = styled.label`
  color: #627d98;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  color: white;
  background-color: #186faf;

  &:hover {
    background-color: #2680c2;
  }
`;

const Login = ({ t, i18n, login }) => {
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
      .then((res) => login())
      .catch((err) => console.error(err));
  };

  const changeLanguage = (language) => i18n.changeLanguage(language);

  return (
    <Container>
      <Box as="form" className="box" onSubmit={onSubmit}>
        <span style={{ textAlign: "center", marginBottom: 50, fontSize: 20 }}>
          {t("register.title")}
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

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Button
            style={{
              backgroundColor: "#DEDEDE",
              color: "black",
              marginRight: 10,
            }}
            onClick={() => changeLanguage("es")}
            type="submit"
          >
            ES
          </Button>
          <Button
            style={{ backgroundColor: "#DEDEDE", color: "black" }}
            onClick={() => changeLanguage("en")}
            type="submit"
          >
            EN
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default withTranslation()(Login);
