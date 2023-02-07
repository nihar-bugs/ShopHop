import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, price }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (cat && !price) {
          const res = await axios.get(
            `http://localhost:5000/api/products?category=${cat}`
          );
          console.log(res.data);
          setProducts(res.data);
        }
        if (!cat && price) {
          const res = await axios.get(
            `http://localhost:5000/api/products?price=${price}`
          );
          console.log(res.data);
          setProducts(res.data);
        }
        if (cat && price) {
          const res = await axios.get(
            `http://localhost:5000/api/products?category=${cat}&price=${price}`
          );
          console.log(res.data);
          setProducts(res.data);
        }
        if (!cat && !price) {
          const res = await axios.get("http://localhost:5000/api/products");
          console.log(res.data, " Category and price not selected");
          setProducts(res.data);
        }
      } catch (err) {
        console.log("API CALL FAILED");
      }
    };
    getProducts();
  }, [cat, price]);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
