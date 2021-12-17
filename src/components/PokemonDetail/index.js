import React from "react";
import PropTypes from "prop-types";

import "./PokemonDetail.css";

const PokemonDetail = ({ pokemon, renderType, renderAbility, renderStats }) => {
  return (
    <div className="container">
      <h2 className="pokemon_detail_head_text">{pokemon.name}</h2>
      <div className="pokemonDetail__container">
        <div className="pokemonDetail__type">
          <p className="detail__title">Type</p>
          {renderType}
          <p className="detail__title">Ability</p>
          {renderAbility}
          <div className="pokemonDetail__info">
            <p className="detail__title">height</p>
            <span
              className="detail__text"
              style={{
                backgroundColor: pokemon.game_indices[3].version.name,
              }}
            >
              {pokemon.height}dm
            </span>
          </div>
          <div className="pokemonDetail__info">
            <p className="detail__title">weight</p>
            <span
              className="detail__text"
              style={{
                backgroundColor: pokemon.game_indices[4].version.name,
              }}
            >
              {pokemon.weight}g
            </span>
          </div>
        </div>

        <div className="pokemonDetail__img__wrapper">
          <img
            className="pokemonDetail__img"
            src={pokemon.sprites.other.home.front_default}
            alt="pokemon"
          />
        </div>
      </div>
      <div className="pokemonDetail__stats_wrapper">{renderStats}</div>
    </div>
  );
};
PokemonDetail.propTypes = {
  pokemon: PropTypes.object,
  renderType: PropTypes.array,
  renderAbility: PropTypes.array,
  renderStats: PropTypes.array,
};
export default PokemonDetail;
