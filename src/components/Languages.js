import React from "react";
import { withTranslation } from "react-i18next";
import { Button } from "../ui";

const Languages = ({ i18n }) => {
  const changeLanguage = (language) => i18n.changeLanguage(language);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
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
  );
};

export default withTranslation()(Languages);
