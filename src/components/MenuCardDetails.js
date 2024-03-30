import React from 'react'
import { CDN_URL } from "../utils/constants";


const MenuCardDetails = (props) => {
    const {item} = props;
  return (
    <div key={item?.card?.info?.id} className="food-details">
            <div className="food-name">
              <span>
                {" "}
                <i
                  style={
                    item?.card?.info?.itemAttribute.vegClassifier === "VEG"
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
  )
}

export default MenuCardDetails