// import React, { useState } from "react";
// import MenuCard from "./MenuCard";

// const MenuCategory = (props) => {
//   const { category, index } = props;
//   const[show,setShow] = useState(false);

//   const handleClick = () => {
//     setShow(!show)
//   };
//   return (
//     <div key={index} className="food-list">
//       <div onClick={handleClick} className="recommended">
//         <h3>
//           {category.card.card.title} ({category.card.card.itemCards.length})
//         </h3>
//         <i
//           className={
//             show
//               ? "bx bx-chevron-up"
//               : "bx bx-chevron-down"
//           }
//         ></i>
//       </div>
     
//       {show &&
//          category?.card?.card?.itemCards?.map((item) => (
//             <MenuCard key={item.card.info.id} item={item}/>
//           ))
//          }
//     </div>
//   );
// };

// export default MenuCategory;
import React, { useState } from "react";
import MenuCard from "./MenuCard";

const MenuCategory = (props) => {
  const { category,index,show,setShowIndex } = props;

  const handleClick = () => {
    setShowIndex()
  };
  return (
    <div key={index} className="food-list">
      <div onClick={handleClick} className="recommended">
        <h3>
          {category.card.card.title} ({category.card.card.itemCards.length})
        </h3>
        <i
          className={
            show
              ? "bx bx-chevron-up"
              : "bx bx-chevron-down"
          }
        ></i>
      </div>
     
      {show &&
         category?.card?.card?.itemCards?.map((item) => (
            <MenuCard key={item.card.info.id} item={item}/>
          ))
         }
    </div>
  );
};

export default MenuCategory;
