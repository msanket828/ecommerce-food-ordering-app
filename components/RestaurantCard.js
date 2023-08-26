import { AiOutlineStar } from "react-icons/ai";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    id,
  } = resData;
  return (
    <Link to={`/restaurantmenu/${id}`} className="res-card">
      <img src={`${CDN_URL}${cloudinaryImageId}`} alt="" />
      <div className="res-card__details">
        <h3 className="name">{name}</h3>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <div className="bottom-container">
          <h4 className="rating">
            <AiOutlineStar
              style={{ marginBottom: "-1px", marginRight: "2px" }}
            />
            {avgRating}
          </h4>
          <h4 className="cost-for-two">{costForTwo}</h4>
          <h4 className="delivery-in">{deliveryTime} min</h4>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
