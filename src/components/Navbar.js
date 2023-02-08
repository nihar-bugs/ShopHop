import styled from "styled-components";
import React from "react";
import { Home, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/loginCall";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 60px;
  background-color: lightcyan;
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

/*const SearchBoxContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;*/

const ShopHop = styled.h1`
  font-weight: bold;
`;

const RightList = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`;
/*<SearchBoxContainer>
            <Input />
            <Search style={{ color: "gray" }} />
          </SearchBoxContainer>*/
const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const Token = JSON.parse(window.localStorage.getItem("Token"));
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    logout(dispatch);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <Home fontSize="large" />
          </Link>
        </Left>

        <Center>
          <Link
            to="/products/:category"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <ShopHop>ShopHop </ShopHop>
          </Link>
        </Center>
        <Right>
          {user && Token ? (
            <>
              <Link
                to="/myorders"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <RightList>My Orders</RightList>
              </Link>
              <Link
                to="/"
                onClick={handleLogOut}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <RightList>Logout</RightList>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/register"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <RightList>Register</RightList>
              </Link>
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <RightList>Login</RightList>
              </Link>
            </>
          )}

          <Link
            to="/cart"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <RightList>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </RightList>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
