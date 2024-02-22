import React from "react";
import ReactDOM from "react-dom/client";

/*Header
 * - Logo
 * - Nav-Links
 * Body
 * - search
 * - Restorent item container
 *     - card container
 *         - img
 *         -name of res
 *         -type
 *         -rating
 *         -delivery time
 * Footer
 *  - copy rights
 *  - links
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://mma.prnewswire.com/media/2000461/Cookin_New_Homemade_Food_Delivery_Marketplace_Cookin_Secures__17.jpg?p=facebook"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="card-container">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5d20a8e52ea43f7a3eefe8d5a87e2f1a"
        alt=""
      />
      <div className="card-details">
        <span>50% OFF UPTO 100/-</span>
        <div className="right">
          <h2>Saravana Bhavan</h2>
          <h4>
            <i class="bx bxs-star"></i> 4.2
          </h4>
        </div>
        <div className="left">
          <h3>Chinese, South Indian</h3>
          <h4>
            <i class="bx bxs-time-five"></i> 30-40 mins
          </h4>
          <p>
            <i class="bx bxs-map"></i> Vazhuthacaud 2.7 km
          </p>
          <p> 0-3 kms | ₹26 Delivery fee will apply</p>

          
        </div>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
