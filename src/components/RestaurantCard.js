import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    avgRatingString,
    cuisines,
    isOpen,
    sla,
    areaName,
  } = resData.info;
  const { deliveryTime, lastMileTravel } = sla;
  // const { header, subHeader } = aggregatedDiscountInfoV3;
  return (
    <div className="card-container">
      <img src={CDN_URL + cloudinaryImageId} alt="" />
      <div className="card-details">
        <span>
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </span>
        <div className="right">
          <h2>{name}</h2>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <span>{avgRatingString}</span>
          </div>
        </div>
        <div className="left">
          <div className="food-type">
            <h3>{cuisines.join(", ")}</h3>
            <i style={isOpen === true ? { color: "green" } : { color: "red" }}>
              {isOpen === true ? "open" : "closed"}
            </i>
          </div>

          <h4>
            <i className="bx bxs-time-five"></i> {deliveryTime} mins
          </h4>
          <h4>
            <i className="bx bxs-map"></i>
            {areaName}
          </h4>
          <p>
            {lastMileTravel >= 3
              ? "🛵 Far " + lastMileTravel + "kms | Additional delivery fee"
              : lastMileTravel + "kms only Free Delivery Available"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
