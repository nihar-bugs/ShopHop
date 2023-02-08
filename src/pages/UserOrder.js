import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const UserOrder = ({ order }) => {
  const [orders, setOrders] = useState({});
  const user_id = useSelector((state) => state.user.currentUser._id);

  const res = useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders/find/" + user_id, {});
        setOrders(res.data);
      } catch (err) {}
    };
    getOrders();
  }, [user_id]);

  return <div>UserOrder</div>;
};

export default UserOrder;
