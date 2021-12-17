import React from "react";

import logo from "../../assets/img/logo.png";

import "./Header.css";

const Header = () => (
  <div className="header__wrapper ">
    <a href="/">
      <img className="header_logo" src={logo} alt="Logo" />
    </a>
    <div className="pokeball bounce"></div>
  </div>
);

export default Header;
