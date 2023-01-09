import React, { useState } from "react";
import "../css/Shop.css";
import cardData from "./Data";

export default function Shop(props) {
  const [itemArray, setItemArray] = useState(cardData);
  const [amountChosen, setAmountChosen] = useState(1);

  return (
    <div id="shopWindow">
      <h2 id="shopTitle">Shop epic items now</h2>
      <h1> Item List</h1>
      <div id="itemSection">
        {itemArray.map((value) => {
          return (
            <div key={value.name} className="itemContainer">
              <h3>{value.name}</h3>
              <img
                key={value.id}
                alt="pic"
                className="itemImage"
                src={value.img}
              ></img>
              <div className="price">{value.price}€</div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("kukkamiehen kosto");
                  props.addItemsIntoCart(amountChosen);
                  props.updatePrice(value.price, amountChosen);

                  setAmountChosen(1);
                }}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAmountChosen((previousState) => previousState + 1);
                  }}
                >
                  +
                </button>
                <input
                  id={`${value.id}`}
                  type={"number"}
                  value={amountChosen}
                  onChange={(e) => {
                    setAmountChosen(Number(e.target.value));
                  }}
                  min="1"
                ></input>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAmountChosen((previousState) => previousState - 1);
                  }}
                >
                  -
                </button>
                <button type="submit">Add to cart</button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
}
