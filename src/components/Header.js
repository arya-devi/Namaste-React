import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import image from "../../images/img.jpg";
import { UserContext } from "../utils/globalContext";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [btn, setBtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedUser, setUserName } = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
        <span>
          <i
            style={onlineStatus ? { color: "green" } : { color: "brown" }}
            className="bx bx-wifi-0"
          ></i>
        </span>
      </div>
      <div className={`nav-items ${showMenu ? "active" : "disabled"}`}>
        <ul>
          <li>
            <input
              type="text"
              placeholder="search"
              value={loggedUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </li>
          <li>
            <Link to={"/search"} className="no-underline">
              <i className="bx bx-search"></i> Search
            </Link>
          </li>
          <li>
            <Link to={"/"} className="no-underline">
              <i className="bx bxs-home-heart"></i> Home
            </Link>
          </li>
          <li>
            <Link to={"/help"} className="no-underline">
              {" "}
              <i className="bx bxs-log-in-circle"></i> About
            </Link>
          </li>
          <li>
            <Link to={"/offers"} className="no-underline">
              <i className="bx bxs-offer"></i>Offers
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="no-underline">
              <i className="bx bxs-cart-alt"></i> Cart
            </Link>
          </li>
          <li>{loggedUser}</li>
          {/* <li>
            <img className="profile-img" src={image} alt="" />
          </li> */}
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
