import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/home">Shop</a>
        <a href="/inventory">Order Review</a>
        <a href="/store">Go Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
