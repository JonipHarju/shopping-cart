import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <Link className="navLinks" to={"/"}>
        <div>Home</div>
      </Link>

      <div className="shopAndCartContainer">
        <Link className="navLinks" to={"/shop"}>
          <div>Shop</div>
        </Link>
        <Link className="navLinks" to={"/cart"}>
          <div>Shopping cart: {props.amountOfItems}</div>
        </Link>
      </div>
    </nav>
  );
}
