import styled from "styled-components";
import React from "react";
import { Home, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  //text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchBoxContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const ShopHop = styled.h1`
  font-weight: bold;
`;

const RightList = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Home />
          <SearchBoxContainer>
            <Input />
            <Search style={{ color: "gray" }} />
          </SearchBoxContainer>
        </Left>
        <Center>
          <ShopHop>ShopHop </ShopHop>
        </Center>
        <Right>
          <RightList>Register</RightList>
          <RightList>Login</RightList>
          <RightList>Logout</RightList>
          <RightList>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </RightList>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
