import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

const useFetchRestaurantMenu = (resid) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchRestaurantMenus();
  }, []);

  const fetchRestaurantMenus = async () => {
    const fetchData = await fetch(`${SWIGGY_MENU_API}${resid}`);
    const data = await fetchData.json();
    // for (let i = 0; i < data?.cards?.length; i++) {
    //   const resData = data?.cards[i]?.groupCard?.cardGroupMap?.REGULAR?.cards;
    //   if (resData) {
    //     data = resData;
    //   }
    // }
    // console.log(data.data);
    setRestaurantMenu(data?.data);
  };
  return restaurantMenu;
};

export default useFetchRestaurantMenu;
