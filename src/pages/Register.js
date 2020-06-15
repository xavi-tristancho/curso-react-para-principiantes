import React from "react";
import request from "../utils/request";
import { withTranslation } from "react-i18next";
import { UnAuthPage } from "../ui/";

const Register = ({ t, login }) => {
  const onSubmit = (credentials) => {
    request("ApplicationUsers", {
      method: "POST",
      body: JSON.stringify(credentials),
    })
      .then((res) => login())
      .catch((err) => console.error(err));
  };

  return (
    <UnAuthPage
      onSubmit={onSubmit}
      title={t("register.title")}
      submitText={t("general.signup")}
      secondaryText={t("general.alreadyHaveAnAccount")}
      secondaryLink={t("general.signin")}
      secondaryTo={"/"}
    ></UnAuthPage>
  );
};

export default withTranslation()(Register);
