import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Sidebar, List, ListItem, Link, Button } from "bluejay-ui";
import { ReactComponent as Customer } from "../images/customer.svg";
import { ReactComponent as Logout } from "../images/logout.svg";

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

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding-bottom: 60px;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1.5px solid #19c3fc;
`;

const AuthPage = ({ user, logout, children }) => {
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
        <ControlsContainer>
          {user.imageUrl && <ProfileImage src={user.imageUrl} />}
          <Button
            color="#FC6B19"
            style={{ marginTop: 20 }}
            rounded
            icon={Logout}
            onClick={logout}
          ></Button>
        </ControlsContainer>
      </Sidebar>
      <MainContainer>{children}</MainContainer>
    </Container>
  );
};

export default AuthPage;
