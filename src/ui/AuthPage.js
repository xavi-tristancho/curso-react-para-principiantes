import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Sidebar, List, ListItem, Link } from "bluejay-ui";
import { ReactComponent as Customer } from "../images/customer.svg";

const Container = styled.div`
  display: flex;
  background-color: white;
`;

const MainContainer = styled.div`
  flex-grow: 1;
  margin: 15px;
  height: calc(100vh - 30px);
  background: linear-gradient(180deg, #edf0f4 0%, #dadde1 100%);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const AuthPage = ({ children }) => {
  const items = [{ name: "Clientes", icon: Customer }];

  return (
    <Container>
      <Sidebar defaultOpen={false}>
        <List>
          {items.map((item, key) => (
            <Link
              key={key}
              as={RouterLink}
              to="/"
              style={{ textDecoration: "none" }}
            >
              <ListItem icon={item.icon}>{item.name}</ListItem>
            </Link>
          ))}
        </List>
      </Sidebar>
      <MainContainer>{children}</MainContainer>
    </Container>
  );
};

export default AuthPage;
