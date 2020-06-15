import React, { useState } from "react";
import request from "../utils/request";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { Button, UnAuthInput } from "../ui/";
import { Link } from "bluejay-ui";
import { Languages } from "../components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(180deg, #19c2fb 0%, #247ac3 100%);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 50px;
  border-radius: 10px;
`;

const UnAuthPage = ({
  t,
  onSubmit,
  title,
  submitText,
  secondaryText,
  secondaryLink,
  secondaryTo,
}) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onLocalSubmit = (e) => {
    e.preventDefault();

    onSubmit(credentials);
  };

  return (
    <Container>
      <Box as="form" className="box" onSubmit={onLocalSubmit}>
        <span
          style={{
            textAlign: "center",
            marginBottom: 50,
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {title}
        </span>
        <UnAuthInput
          placeholder={t("general.email")}
          type="email"
          name="email"
          id="email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          value={credentials.email}
        ></UnAuthInput>
        <UnAuthInput
          placeholder={t("general.password")}
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          value={credentials.password}
        ></UnAuthInput>

        <Button color="secondary" style={{ fontWeight: "bold" }} type="submit">
          {submitText}
        </Button>

        <span style={{ marginTop: 35, color: "#2F308A", fontWeight: "bold" }}>
          {secondaryText}
          <RouterLink component={Link} to={secondaryTo} color="primary">
            {secondaryLink}
          </RouterLink>
        </span>

        <Languages></Languages>
      </Box>
    </Container>
  );
};

export default withTranslation()(UnAuthPage);
