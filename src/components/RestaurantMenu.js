import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantMenu";
import MenuCard from "./MenuCard";
import MenuCategory from "./MenuCategory";

const RestaurentMenu = () => {
  const [vegOnly, setVegOnly] = useState(false);
  const [resMenu, setResMenu] = useState([]);
  const [showIndex, setShowIndex] = useState(null);

  const { id } = useParams();
  const resInfo = useRestaurantData(id);

  useEffect(() => {
    if (resInfo) {
      const totalData =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const totalMenu = totalData.filter((item) => item?.card?.card?.itemCards);

      setResMenu(totalMenu);
      console.log(totalMenu);

      console.log(resMenu);
      console.log(resInfo);
    }
  }, [resInfo]);

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
  } = resInfo?.cards[2]?.card?.card?.info;
  const { slaString, lastMileTravelString } =
    resInfo?.cards[2]?.card?.card?.info?.sla;

  const offers =
    resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  // console.log(offers);

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
                <span>
                  {" "}
                  <i className="bx bxs-offer bx-flashing"></i>
                </span>

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
              onClick={() => setVegOnly((prev) => !prev)}
              className="bx bx-food-tag"
            ></i>
          </div>
        </div>

        {vegOnly
          ? resMenu.map((item) => <MenuCard key={item.id} item={item} />)
          : resMenu.map((category, index) => (
            // now this is a controlled component the parent(RestaurantMenu) is controlling the child(MenuCategory) its doest have its own state
              <MenuCategory
                key={category.id}
                category={category}
                show={index === showIndex ? true : false}
                setShowIndex={() =>
                  setShowIndex(index === showIndex ? null : index)
                }
              />
            ))}
      </div>
    </div>
  );
};
export default RestaurentMenu;
