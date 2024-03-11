import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [vegOnly, setVegOnly] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [categories, setCategories] = useState([]);

  const findCategory = (index) => {
    const removeIndex = categories.indexOf(index);
    categories.includes(index)
      ? categories.splice(removeIndex, 1) && setArrowDown(true)
      : categories.push(index) && setArrowDown(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (vegOnly === true) {
      const isVeg = filteredMenu.filter(
        (item) => item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
      );
      setResMenu(isVeg);
    } else {
      setResMenu(filteredMenu);
    }
  }, [vegOnly]);

  const params = useParams();
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.490872999999999&lng=76.9527483&restaurantId=" +
        params.id
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);

    const totalData =
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const totalMenu = totalData.filter((item) => item?.card?.card?.itemCards);

    setResMenu(totalMenu);
    setFilteredMenu(totalMenu);
    console.log(totalMenu);

    console.log(resMenu);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    areaName,
    avgRating,
    city,
    costForTwoMessage,
    cuisines,
    name,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;
  const { slaString, lastMileTravelString } =
    resInfo?.cards[0]?.card?.card?.info?.sla;

  const offers =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  console.log(offers);

  return (
    <div className="menu-container">
      <div className="res-details">
        <div className="res-place">
          <h5>
            Home/{city}/{name}
          </h5>
        </div>
        <div className="res-namecontainer">
          <div className="res-name">
            <h2>{name}</h2>
            <p>{cuisines.join(" , ")}</p>
            <p>
              {areaName}-{lastMileTravelString}
            </p>
          </div>
          <div className="res-rating">
            <div className="rate-star">
              <i className="bx bxs-star"></i>
              <h5>{avgRating}</h5>
            </div>
            <div className="rating">
              <h5>{totalRatingsString}</h5>
            </div>
          </div>
        </div>
        <div className="time-and-cost">
          <div className="time">
            <h5>
              <i className="bx bx-time-five"></i> {slaString}
            </h5>
          </div>
          <div className="cost">
            <h5>{costForTwoMessage}</h5>
          </div>
        </div>
        <div className="offer-card">
          {offers.map((offer, index) => (
            <div key={index} className="res-offers">
              <h4>
                <i className="bx bxs-offer bx-flashing"></i>
                {offer.info.header}
              </h4>
              <h5>
                {offer.info.couponCode} | {offer.info.description}
              </h5>
            </div>
          ))}
        </div>
      </div>
      <div className="menu-details">
        <div className="veg-only">
          <h4>Veg only</h4>
          <div className={`veg-only-btn ${vegOnly ? "active" : ""}`}>
            <i
              onClick={() => setVegOnly((falsy) => !falsy)}
              className="bx bx-food-tag"
            ></i>
          </div>
        </div>
        {resMenu.map((category, index) => (
          <div key={index} className="food-list">
            <div onClick={() => findCategory(index)} className="recommended">
              <h3>
                {category.card.card.title} (
                {category.card.card.itemCards.length})
              </h3>
              <i
                className={
                  categories.includes(index) ? "bx bx-chevron-down" : "bx bx-chevron-up"
                }
              ></i>
            </div>
            {categories.includes(index)
              ? category?.card?.card?.itemCards?.map((item) => (
                  <div key={item?.card?.info?.id} className="food-details">
                    <div className="food-name">
                      <span>
                        {" "}
                        <i
                          style={
                            item?.card?.info?.itemAttribute.vegClassifier ===
                            "VEG"
                              ? { color: "green" }
                              : { color: "brown" }
                          }
                          className="bx bx-food-tag"
                        ></i>
                      </span>

                      <h6>
                        <div className="food-tag">
                          <i
                            style={
                              item?.card?.info?.ribbon.text
                                ? { color: "#ff7300" }
                                : { color: "white" }
                            }
                            className="bx bxs-star"
                          ></i>
                          {item?.card?.info?.ribbon.text}
                        </div>
                      </h6>
                      <h4>{item?.card?.info?.name}</h4>
                      <h5>
                        ₹{" "}
                        {item?.card?.info?.price / 100 ||
                          item?.card?.info?.defaultPrice / 100}
                      </h5>
                      <p>
                        {item?.card?.info?.description?.length > 50
                          ? item?.card?.info?.description
                              .split(" ")
                              .slice(0, 10)
                              .join(" ") + "..."
                          : item?.card?.info?.description}
                      </p>
                    </div>
                    <div className="food-img">
                      {item?.card?.info?.imageId && (
                        <img src={CDN_URL + item?.card?.info?.imageId} alt="" />
                      )}
                      <button>ADD</button>
                    </div>
                  </div>
                ))
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurentMenu;
