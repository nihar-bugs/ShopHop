import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserOrder from "./UserOrder";
import { useState } from "react";

const Container = styled.div``;
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

const OrderDisplayContainer = styled.div``;

const UserOrders = () => {
  const [orderDate, setOrderDate] = useState("");

  const handleOrders = (e) => {
    setOrderDate(e.target.value);
  };

  return (
    <>
      <Container>
        <Navbar />
        <FilterContainer>
          <Filter>
            <FilterText>Filter Orders:</FilterText>
            <Select name="order" onChange={handleOrders}>
              <Option disabled selected>
                TimeFrame
              </Option>
              <Option value="past3days">past 3 days</Option>
              <Option value="past5days">past 5 days</Option>
              <Option value="past7days">past 7 days</Option>
              <Option value="olderthan10days">older than 10 days</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <OrderDisplayContainer>
          <UserOrder order={orderDate} />
        </OrderDisplayContainer>
        <Footer />
      </Container>
    </>
  );
};

export default UserOrders;
