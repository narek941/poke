import React from "react";
import Load from "../Loading/index";
import Card from "../Card";
import "./List.css";

const List = ({ pokemons, isLoading }) => {
  const pokemonCard = pokemons.map((item) =>
    isLoading ? (
      <Load key={item.id} />
    ) : (
      <Card
        key={item.id}
        id={item.id}
        img={item.sprites.front_default}
        name={item.name}
        weight={item.weight}
        height={item.height}
      />
    )
  );

  return <div className="container list__container">{pokemonCard}</div>;
};

export default List;
