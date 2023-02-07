import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const Container = styled.div``;

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const ProductInfoContainer = styled.div`
  flex: 1;
  padding: 50px 50px;
  letter-spacing: 4px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddRemoveProductContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  font-size: 20px;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  border: 2px solid teal;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0px 5px;
`;

const Button = styled.button`
  width: 150px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const ShopItem = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <ProductInfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>Rs.{product.price}</Price>
          <AddRemoveProductContainer>
            <AmountContainer>
              <Remove
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              />
              <Amount>{quantity}</Amount>
              <Add onClick={() => setQuantity(quantity + 1)} />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddRemoveProductContainer>
        </ProductInfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ShopItem;
