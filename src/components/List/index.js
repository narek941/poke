import React from "react";
import PropTypes from "prop-types";

import Card from "../Card";
import Load from "../Loading/index";

import "./List.css";

const List = ({ pokemons, isLoading }) => {
  const pokemonCard = pokemons.map((item) =>
    isLoading ? (
      <Load key={item.id} />
    ) : (
      <Card key={item.id} id={item.id} img={item.img} name={item.name} />
    )
  );

  return <div className="container list__container">{pokemonCard}</div>;
};
List.propTypes = {
  pokemons: PropTypes.array,
  isLoading: PropTypes.bool,
};
export default List;
