import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 2px;
  font-size: 20px;
  border: ${(props) => props.type == "filled" && "none"};
  background-color: ${(props) =>
    props.type == "filled" ? "black" : "transparent"};
  color: ${(props) => props.type == "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 250px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Name = styled.span``;

const Quantity = styled.span``;

const Category = styled.span``;

const PriceDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

const ProductAmountConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const Amount = styled.div`
  font-size: 24px;
  margin: 6px;
  margin-top: 8px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: 1px solid grey;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 30px;
  height: 70vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  letter-spacing: 3px;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "20px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 200;
  letter-spacing: 3px;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const handleCheckOut = () => {
    if (user) {
      console.log("Proceed to success page");
      navigate("/success");
    } else {
      alert("Please login to place order");
      navigate("/login");
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>WELCOME TO CHECKOUT COUNTER</Title>
        <Top>
          <TopButton onClick={() => navigate("/products/:category")}>
            CONTINUE SHOPPING
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetails>
                  <Image src={product.img} />
                  <Details>
                    <Name>
                      Product:
                      {product.title}
                    </Name>
                    <Category>
                      Category:
                      {product.categories}
                    </Category>
                    <Quantity>2</Quantity>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountConatiner>
                    <Add />
                    <Amount>{product.quantity}</Amount>
                    <Remove />
                  </ProductAmountConatiner>
                  <ProductPrice>
                    Rs.{product.price * product.quantity}
                  </ProductPrice>
                </PriceDetails>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemPrice>Rs.{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Cost:</SummaryItemText>
              <SummaryItemPrice>Rs.50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount:</SummaryItemText>
              <SummaryItemPrice>Rs.-50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total Amount:</SummaryItemText>
              <SummaryItemPrice>Rs.{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handleCheckOut}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
