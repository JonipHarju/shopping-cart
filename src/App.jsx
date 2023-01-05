import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import "./style.css";

export default function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [amountOfItems, setAmountOfItems] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar amountOfItems={amountOfItems} />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
