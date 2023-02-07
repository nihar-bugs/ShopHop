import Navbar from "../components/Navbar";
import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
`;
const Option = styled.option``;

const Shop = () => {
  //const location = useLocation();
  //const cat = location.pathname.split("/")[2];
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleFilters = (e) => {
    const value = e.target.value;
    if (e.target.name === "category") {
      setCategory(value);
    }
    if (e.target.name === "price") {
      setPriceRange(value);
    }
  };

  return (
    <Container>
      <Navbar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter By:</FilterText>
          <Select name="category" onChange={handleFilters}>
            <Option disabled selected>
              Category
            </Option>
            <Option value="Torso">Torso</Option>
            <Option value="Bottomwear">Bottom Wear</Option>
            <Option value="Footwear">Foot Wear</Option>
            <Option value="Accessories">Accessories</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter By:</FilterText>
          <Select name="price" onChange={handleFilters}>
            <Option disabled selected>
              Price
            </Option>
            <Option value="<500">0-500</Option>
            <Option value="500-1000">500-1000</Option>
            <Option value="1000-2000">1000-2000</Option>
            <Option value=">2000">2000-More</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={category} price={priceRange} />
      <Footer />
    </Container>
  );
};

export default Shop;
