import React, { useContext, useRef, useState } from "react";
import "./navbar.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown from "../../Assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setmenu] = useState(null);
  const { getTotalCartItem } = useContext(ShopContext);
  const menuRef = useRef();

  const dropDown_Toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const logout = (e) => {
    localStorage.removeItem("auth_token");
    window.location.replace("/");
  };

  return (
    <div className="navbar flex">
      <div className="nav-logo flex">
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropDown_Toggle}
        src={dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-category flex">
        <li onClick={() => setmenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : ""}
        </li>

        <li onClick={() => setmenu("men")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "men" ? <hr /> : ""}
        </li>

        <li onClick={() => setmenu("women")}>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "women" ? <hr /> : ""}
        </li>

        <li onClick={() => setmenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="cart-login flex">
        {localStorage.getItem("auth_token") ? (
          <button onClick={logout}>Log Out</button>
        ) : (
          <Link to="/login">
            <button>Login</button>{" "}
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" />{" "}
        </Link>
        <div className="badge flex ">{getTotalCartItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
