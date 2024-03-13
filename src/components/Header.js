import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [btn, setBtn] = useState("login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className={`nav-items ${showMenu ? "active" : "disabled"}`}>
        <ul>
          <li>
            <Link to={"/search"} className="no-underline">
              <i className="bx bx-search"></i> Search
            </Link>
          </li>
          <li>
            <Link to={"/"}className="no-underline">
              <i className="bx bxs-home-heart"></i> Home
            </Link>
          </li>
          <li>
            <Link to={"/help"}className="no-underline">
              {" "}
              <i class='bx bxs-log-in-circle' ></i> About 
            </Link>
          </li>
          <li>
            <Link to={"/offers"}className="no-underline">
            <i className="bx bxs-offer"></i>Offers
            </Link>
          </li>
          <li>
            <Link to={"/cart"}className="no-underline">
              <i className="bx bxs-cart-alt"></i> Cart
            </Link>
          </li>
          <button
            className="btn-loginout"
            onClick={() => {
              btn === "login" ? setBtn("logout") : setBtn("login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
      <div
        className="menu-item"
        onClick={() => {
          console.log("click");
          setShowMenu((falsy) => !falsy);
        }}
      >
        <i className="bx bx-menu-alt-left bx-flip-vertical"></i>
      </div>
    </div>
  );
};

export default Header;
