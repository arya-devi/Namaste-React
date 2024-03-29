import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineImg from "./OfflineImg";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterfRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5241391&lng=76.9366376&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    const restaurants =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurants);
    setFilterfRestaurants(restaurants);
    // console.log(restaurants);
    console.log(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <div>
        <h1>You'r Offline Now Please Check The Internet Connection ! 👀</h1>
        <OfflineImg />
      </div>
    );

  return listOfRestaurant.length === 0 && !search ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-res">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);

              const filteredList = filterRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setListOfRestaurants(filteredList);
            }}
          />
          <button
            className="search-res-btn"
            onClick={() => {
              const filteredList = filterRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Search
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
        {listOfRestaurant.length === 0 ? (
          <h1>no such restaurants</h1>
        ) : (
          listOfRestaurant?.map((restaurant) => (
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.veg ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
