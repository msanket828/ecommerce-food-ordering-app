import { useEffect, useState } from "react";
import { SWIGGY_URL, resList } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    const fetchCall = await fetch(`${SWIGGY_URL}`);
    const json = await fetchCall.json();
    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);
    console.log(resData);
    setListOfRestaurant(resData);
    setFilteredRestaurants(resData);
  };
  return (
    <div className="main">
      <div className="container">
        <div className="search">
          <input
            type="search"
            className="ip-control ip-search"
            placeholder="Search Restaurant"
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
            }}
          />
          <button
            type="button"
            className="btn btn-search"
            onClick={() => {
              const filterRes = listOfRestaurant.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchRestaurant.toLowerCase())
              );
              setFilteredRestaurants(filterRes);
            }}
          >
            Submit
          </button>
        </div>
        <div className="filter">
          <button
            type="button"
            className="filter-btn"
            onClick={() =>
              setFilteredRestaurants(
                listOfRestaurant.filter((res) => res.info.avgRating > 4)
              )
            }
          >
            Top rated restaurant
          </button>
        </div>
        {listOfRestaurant?.length !== 0 ? (
          <div className="row-container">
            {filteredRestaurants?.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant.info.id}
                  resData={restaurant.info}
                />
              );
            })}
          </div>
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
