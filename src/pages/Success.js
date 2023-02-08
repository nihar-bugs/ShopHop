import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 50%;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 200;
  letter-spacing: 3px;
  flex: 2;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
`;

const SuccessMessage = styled.div`
  font-size: large;
  font-weight: 900;
  letter-spacing: 3px;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 3;
  margin-top: 60px;
  flex: 3;
`;
const Error = styled.div`
  font-size: large;
  font-weight: 900;
  letter-spacing: 3px;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 3;
  margin-top: 60px;
`;

const Success = () => {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
        });
        setOrderId(res.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    console.log(cart.products.length);
    cart.products.length > 0
      ? createOrder()
      : console.log("Please put items in cart before creating orders");
  }, [cart, currentUser]);

  return (
    <Container>
      <Wrapper>
        {cart.products.length == 0 ? (
          <>
            <Error>
              Cart is Empty!! Please put something in your Cart to place Order
            </Error>
            <Button onClick={() => navigate("/cart")}>Go Back to Cart</Button>
          </>
        ) : (
          <>
            <SuccessMessage>
              Order Placed Successfully. Order ID:{orderId}
            </SuccessMessage>
            <Button onClick={() => navigate("/shop")}>
              Continue ShopHoping!!
            </Button>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Success;
