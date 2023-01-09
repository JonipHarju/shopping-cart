import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <Link className="navLinks link" to={"/"}>
        <div>Home</div>
      </Link>

      <div className="shopAndCartContainer">
        <Link className="navLinks link" to={"/shop"}>
          <div>Shop</div>
        </Link>
        <Link className="navLinks link" to={"/cart"}>
          <div className="cart">
            <div id="cartInfo1">Shopping cart: {props.amountOfItems}</div>
            <div id="cartInfo2">Total Price: {props.cartPrice}€</div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
