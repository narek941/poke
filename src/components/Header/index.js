import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  return (
    <div className="header__wrapper ">
      <NavLink className="header_main" to="/">
        Pokedex
      </NavLink>
      <div className="pokeball bounce"></div>
    </div>
  );
};

export default Header;
