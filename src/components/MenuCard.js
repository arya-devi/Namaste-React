import React from "react";
import MenuCardDetails from "./MenuCardDetails";

const MenuCard = (props) => {
  const { item } = props;
  console.log(item);
  const filteredItems = item.card?.card?.itemCards.filter(
    (item) => item.card?.info?.itemAttribute?.vegClassifier === "VEG"
  );
  return (
    <>
      {filteredItems ? 
        filteredItems.map((item) => (
          <MenuCardDetails key={item.id} item={item}/>
        ))
       : (
        <MenuCardDetails key={item.id} item={item}/>
      )}
    </>
  );
};

export default MenuCard;
