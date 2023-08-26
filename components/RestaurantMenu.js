import { AiTwotoneStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { RiRestaurant2Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantmenus";
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resid } = useParams();
  const restaurantMenu = useFetchRestaurantMenu(resid);
  const [showCards,setShowCards]=useState(2);
  
  if (restaurantMenu === null) return <Shimmer />;
  const { name, id, avgRatingString, areaName, cloudinaryImageId } =
    restaurantMenu?.cards[0]?.card?.card?.info;
  const itemCards =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return (
    <div className="main">
      <div className="container">
        <div className="menu-container">
          {/* ------------------------ restaurant detail section ----------------------- */}
          <div className="resto-detail">
            <div className="name">
              <RiRestaurant2Line className="icon-md" />
              <h1>{name}</h1>
            </div>
            <img src={CDN_URL + cloudinaryImageId} className="image" />
            <div className="location">
              <ImLocation className="icon-sm" />
              <h3>{areaName}</h3>
            </div>
            <div className="rating">
              <AiTwotoneStar className="icon-sm" />
              <h2>{avgRatingString}</h2>
            </div>
          </div>
          {/*------------------------- restaurant menu detail ------------------------- */}
          <div className="resto-menu-detail">           
            {itemCards?.map((item, index) => {
              return index > 1 && <RestaurantMenuCard key={index} item={...item} showCards={index === showCards} setShowCards={()=>setShowCards(index)}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
