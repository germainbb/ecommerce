import { ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Search from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  font-weight: 60px;
  height: 60px;
  background-color: aliceblue;
  align-items: center;
`;
const Wrapper = styled.div`
  align-items: center;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
`;
const Language = styled.div`
  flex: 1;
  width: 10px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  justify-items: flex-end;
`;
const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid red;
  width: 90%;
  background-color: white;
  border-radius: 5px;
`;
const Input = styled.input`
  border-color: white;
  border-style: none;
  border: none;
  align-items: center;
  width: 90%;
`;
const Logo = styled.h1`
  font-weight: 100;
  font-size: 50;
`;
const MenuItem = styled.div`
  cursor: pointer;
  right: 9px;
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "orange", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>GThink</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
