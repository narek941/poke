import React from "react";
import { NavLink } from "react-router-dom";

import "./SearchList.css";

const SearchList = ({ pokemons }) => {
  const pokemonCard = pokemons.map((item, index) => (
    <NavLink to={"pokemon/" + item.id}>
      <div className="search__list__container">
        <p className="search__list__name">{index + 1}</p>
        <p className="search__list__name">{item.name}</p>
        <img className="search__list__img" src={item.sprites.front_default} />
      </div>
    </NavLink>
  ));

  return <div className="container">{pokemonCard}</div>;
};

export default SearchList;
