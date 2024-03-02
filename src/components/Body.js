import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterfRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9816358&lng=76.2998842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    const restaurants =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurants);
    setFilterfRestaurants(restaurants);
    // console.log(restaurants);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-res">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const filteredList = filterRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(search.toLowerCase())
                );
                setListOfRestaurants(filteredList);
              }
            }}
          />
          <button
            onClick={() => {
              const filteredList = filterRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setListOfRestaurants(filteredList);
            }}
          >
            click
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(filterRestaurant);
          }}
        >
          See All Restaurents
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filterRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filterRestaurant.filter(
              (res) => res.info.sla.lastMileTravel <= 3
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Fast Delivery
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filterRestaurant.filter(
              (res) => res.info.sla.lastMileTravel <= 6
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Restaurent Nearby
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
