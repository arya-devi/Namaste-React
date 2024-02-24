import { useState } from "react";
import data from "../utils/mockData";

import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant,setListOfRestaurants] = useState(data);

  // Aray destructure methods
  
// const arr = useState(data)
// const [listOfRestaurant,setListOfRestaurants] = arr;
// const listOfRestaurant = arr[0]
// const setListOfRestaurants = arr[1]

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.3
            );

            setListOfRestaurants(filteredList);
          }}
        >Top Rated Restaurents</button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
