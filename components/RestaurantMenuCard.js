import React, { useState } from "react";
import { BiSolidDownArrowCircle, BiSolidUpArrowCircle } from "react-icons/bi";

import RestaurantMenuCardItem from "./RestaurantMenuCardItem";

const RestaurantMenuCard = ({ item, showCards, setShowCards }) => {
  const cardItem = item?.card?.card;
  const [clickedOnAdd, setClickedOnAdd] = useState(false);
  const [qn, setQn] = useState(0);

  return (
    cardItem?.itemCards && (
      <div className="resto-menu-type">
        <div className="resto-menu-header" onClick={() => setShowCards()}>
          <h2 className="resto-menu-title">{cardItem.title}</h2>
          <div className="accordion-arrow">
            {showCards ? (
              <BiSolidUpArrowCircle size={"1.5em"} />
            ) : (
              <BiSolidDownArrowCircle size={"1.5em"} />
            )}
          </div>
        </div>
        <div
          className={`${
            showCards ? "rest-menu-items" : "rest-menu-items hide"
          }`}
        >
          {cardItem?.itemCards.map((card) => {
            return (
              <RestaurantMenuCardItem key={card?.card?.info?.id} card={card} />
            );
          })}
        </div>
      </div>
    )
  );
};

export default RestaurantMenuCard;
