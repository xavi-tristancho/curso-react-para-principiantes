import React from "react";
import request from "../utils/request";
import { withTranslation } from "react-i18next";
import { UnAuthPage } from "../ui/";

const Login = ({ t, login }) => {
  const onSubmit = (credentials) => {
    

    request("ApplicationUsers/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    })
      .then((res) => login())
      .catch((err) => console.error(err));
  };

  return (
    <UnAuthPage
      onSubmit={onSubmit}
      title={t("login.title")}
      submitText={t("general.signin")}
      secondaryText={t("general.doNotHaveAccountYet")}
      secondaryLink={t("general.registerHere")}
      secondaryTo={"/register"}
    ></UnAuthPage>
  );
};

export default withTranslation()(Login);
