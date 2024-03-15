import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";

const MenuCategory = (props) => {
  const { category, index } = props;
  const [categories, setCategories] = useState([]);
  const [arrowDown, setArrowDown] = useState(false);

  const findCategory = (index) => {
    setArrowDown((prev) => !prev);
    const removeIndex = categories.indexOf(index);
    categories.includes(index)
      ? categories.splice(removeIndex, 1)
      : categories.push(index);
  };
  return (
    <div key={index} className="food-list">
      <div onClick={() => findCategory(index)} className="recommended">
        <h3>
          {category.card.card.title} ({category.card.card.itemCards.length})
        </h3>
        <i
          className={
            categories.includes(index)
              ? "bx bx-chevron-up"
              : "bx bx-chevron-down"
          }
        ></i>
      </div>
      {categories.includes(index)
        ? category?.card?.card?.itemCards?.map((item, itemIndex) => (
            <div key={itemIndex} className="food-details">
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
          ))
        : null}
    </div>
  );
};

export default MenuCategory;
