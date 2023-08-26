import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const items = useSelector((state) => state.cart.items);
  const calculateTotal = () => {
    let total = 0;
    for (let item of items) {
      const { price, defaultPrice } = item.card.info;
      const { quantity } = item;
      total += ((price | defaultPrice) / 100).toFixed() * quantity;
    }
    return total;
  };
  return (
    <div className="cart-summary">
      <div className="cart-item-summary bold">
        <h2>Cart Items</h2>
        <h4>Qty</h4>
        <p>Price</p>
      </div>
      <hr />
      {items.map((item) => {
        const { id, name, price, defaultPrice } = item.card.info;
        const { quantity } = item;
        return (
          <div className="cart-item-summary" key={id}>
            <h2>{name}</h2>
            <h4>{quantity}</h4>
            <p>{(((price | defaultPrice) / 100) * quantity).toFixed()}</p>
          </div>
        );
      })}
      <hr />
      <div className="grand-total bold">
        <h2>Total</h2>
        <p>{calculateTotal()}</p>
      </div>
    </div>
  );
};

export default CartSummary;
