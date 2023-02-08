
import React from "react";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Shop from "./pages/Shop"
import ShopItem from "./pages/ShopItem";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import UserOrders from "./pages/UserOrders";
import{ BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import{useSelector} from "react-redux"
import Success from "./pages/Success";


const App = () => {

  const user = useSelector(state => state.user.currentUser)

  return  (<>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<Shop />} />
        <Route path="/product/:id" element={<ShopItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" />:<Login />} />
        <Route path="/register" element={user ? <Navigate to="/" />:<Register />} />
        <Route path="/myorders" element ={<UserOrders />} />
        <Route path="/success" element ={<Success />} />
      </Routes>
    </Router>
    </>
  )
  
  }
export default App;