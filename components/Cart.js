import React from "react";
import RestaurantMenuCardItem from "./RestaurantMenuCardItem";
import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="main">
      <div className="container">
        {cartItems.length ? (
          <div className="cart-divider">
            <div className="rest-menu-card-container">
              {cartItems.map((cartItem) => {
                return (
                  <RestaurantMenuCardItem
                    key={cartItem.card.info.id}
                    card={cartItem}
                    isItemAdded={true}
                    quantity={cartItem.quantity}
                    removeCart={true}
                  />
                );
              })}
            </div>
            <CartSummary />
          </div>
        ) : (
          <h2>No items you have in your cart...</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
