import React, { useEffect, useState } from "react";
import {
  addToCart,
  removeFromCart,
  removeSpecificItemFromCart,
} from "../redux/cartSlice";
import { MENU_CARD_IMAGE_URL } from "../utils/constants";
import { FaRupeeSign } from "react-icons/fa";
import veg from "../assets/images/veg-icon.png";
import nonVeg from "../assets/images/nonveg-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RestaurantMenuCardItem = ({
  card,
  isItemAdded,
  quantity,
  removeCart,
}) => {
  const param = useParams();
  const [itemAdded, setItemAdded] = useState(false);
  const [qn, setQn] = useState(1);
  const { itemAttribute, name, description, imageId, price, defaultPrice } =
    card.card.info;
  const dispatch = useDispatch();

  const addQn = () => {
    setQn((prev) => prev + 1);
  };

  const removeQn = () => {
    if (qn === 1) {
      setItemAdded(false);
    } else {
      setQn((prev) => prev - 1);
    }
  };

  // updating quantity for cart component
  useEffect(() => {
    if (quantity) {
      setQn(quantity);
    }
  }, [quantity]);

  return (
    <div className="rest-menu-card">
      <div className="rest-menu-card-detail">
        {itemAttribute?.vegClassifier?.toLowerCase() == "veg" ? (
          <img src={veg} className="classifier" alt="veg" />
        ) : (
          <img src={nonVeg} className="classifier" alt="non veg" />
        )}
        <h2>{name}</h2>
        <p>{description}</p>
        <h1>
          <FaRupeeSign size={"1em"} />{" "}
          {((price | defaultPrice) / 100).toFixed()}
        </h1>
        {removeCart && (
          <button
            className="theme-btn"
            type="button"
            onClick={() => dispatch(removeSpecificItemFromCart(card))}
          >
            remove from cart
          </button>
        )}
      </div>
      <div className="rest-menu-card-image">
        <img src={MENU_CARD_IMAGE_URL + imageId} alt="" />
        {itemAdded | isItemAdded ? (
          <div className="quantity-box">
            <button
              type="button"
              onClick={() => {
                dispatch(addToCart(card));
                addQn();
              }}
            >
              +
            </button>

            <div className="quantity-ip">{qn}</div>
            <button
              type="button"
              onClick={() => {
                dispatch(removeFromCart(card));
                removeQn();
              }}
            >
              -
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="add-btn-container"
            onClick={() => {
              dispatch(addToCart(card));
              setItemAdded(!itemAdded);
            }}
          >
            add
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuCardItem;
