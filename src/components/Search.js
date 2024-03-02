import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import ShimmerSearch from "./ShimmerSearch";

const Search = () => {
  const [listOfPopularCuisines, setListOfPopularCuisines] = useState([]);
  const [filteredCuisines, setFilteredCuisines] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [listOfRestaurant, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9816358&lng=76.2998842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const PopularCuisines =
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    setListOfPopularCuisines(PopularCuisines);
    setFilteredCuisines(PopularCuisines);
    console.log(json);
    console.log(PopularCuisines);
    const restaurants =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurants);
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };
  return listOfRestaurant.length === 0  ? (
    <ShimmerSearch />
  ) : (
    <>
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for Restaurents and food"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const filteredList = filteredCuisines.filter((cusines) =>
                  cusines.action.text
                    .toLowerCase()
                    .includes(textInput.toLowerCase())
                );
                const filteredLists = filteredRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(textInput.toLowerCase())
                );
                setListOfPopularCuisines(filteredList);
                setListOfRestaurants(filteredLists);
              }
            }}
          />
          <i
            onClick={() => {
              const filteredList = filteredCuisines.filter((cusines) =>
                cusines.action.text
                  .toLowerCase()
                  .includes(textInput.toLowerCase())
              );
              const filteredLists = filteredRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(textInput.toLowerCase())
              );
              setListOfPopularCuisines(filteredList);
              setListOfRestaurants(filteredLists);
            }}
            className="bx bx-search"
          ></i>
        </div>
      </div>
      <div className="popCuzz">
        <h2>Popular Cuisines and Restaurents...</h2>
      </div>

      <div className="main-container2">
        {listOfRestaurant?.map((res) => (
          <div key={res.info.id} className="single-container2">
            <div className="images-container">
              <img src={CDN_URL + res.info.cloudinaryImageId} alt="" />
            </div>
            <div className="text-container">
              <h4>{res.info.name}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="main-container">
        {listOfPopularCuisines?.map((cusines) => (
          <div key={cusines.id} className="single-container">
            <div className="image-container">
              <img src={CDN_URL + cusines.imageId} alt="" />
            </div>
            <div className="text-container">
              <h4>{cusines.action.text}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
