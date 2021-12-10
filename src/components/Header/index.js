import React from "react";

import "./Header.css";

const Header = (props) => {
  return (
    <div className="header__wrapper ">
      <h1>Pokedex</h1>
      <div className="pokeball bounce"></div>
    </div>
  );
};

export default Header;
