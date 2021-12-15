import React from "react";

import "./SearchList.css";

const SearchList = ({ pokemons }) => {
  const pokemonCard = pokemons.map((item, index) => (
    <div className="search__list__container">
      <p className="search__list__name">{index + 1}</p>
      <p className="search__list__name">{item.name}</p>
      <img className="search__list__img" src={item.sprites.front_default} />
    </div>
  ));

  return <div className="container">{pokemonCard}</div>;
};

export default SearchList;
