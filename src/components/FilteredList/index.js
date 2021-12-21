import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./FilteredList.css";

const FilteredList = ({ pokemons }) => {
  const pokemonCard = pokemons.map((item, index) => (
    <NavLink className="search__list__container" to={"pokemon/" + item.id}>
      <p className="search__list__name">{index + 1}</p>
      <p className="search__list__name">{item.name}</p>
      <img className="search__list__img" src={item.img} alt="pokemon" />
    </NavLink>
  ));

  return <div className="container">{pokemonCard}</div>;
};
FilteredList.propTypes = {
  pokemons: PropTypes.object,
};
export default FilteredList;
