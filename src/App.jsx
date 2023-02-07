
import React from "react";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Shop from "./pages/Shop"
import ShopItem from "./pages/ShopItem";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Products from "./components/Products";
import{ BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"


const App = () => {

  const user = true

  return  (<>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<Shop />} />
        <Route path="/product/:id" element={<ShopItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" />:<Login />} />
        <Route path="/register" element={user ? <Navigate to="/" />:<Register />} />
      </Routes>
    </Router>
    </>
  )
  
  }
export default App;