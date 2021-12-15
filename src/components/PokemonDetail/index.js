import React from "react";

import "./PokemonDetail.css";

const PokemonDetail = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="pokemonDetail__container container">
      <div className="pokemonDetail__img">
        <img
          className="pokemonDetail__img__inner"
          src={pokemon.sprites.front_default}
        />
      </div>
    </div>
  );
};

export default PokemonDetail;
