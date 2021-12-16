import React from "react";

import "./PokemonDetail.css";

const PokemonDetail = ({ pokemon }) => {
  const renderClass = (stat) => {
    const arr = [];
    const colorForStat = Math.ceil(stat / 25);

    for (let i = 10; i > 0; i--) {
      if (i <= colorForStat) {
        arr.push("pokemonsDetail__stat__box__inner color_for_stat");
      } else {
        arr.push("pokemonsDetail__stat__box__inner");
      }
    }
    return arr.map((classItem) => {
      return <span className={classItem}></span>;
    });
  };

  return (
    <div className="container">
      <h2 className="pokemon_detail_head_text">{pokemon.name}</h2>
      <div className="pokemonDetail__container">
        <div className="pokemonDetail__type">
          <p className="detail__title">Type</p>
          {pokemon.types.map((type) => {
            return (
              <span
                className="detail__text"
                style={{
                  backgroundColor: pokemon.game_indices[1].version.name,
                }}
              >
                {type.type.name}
              </span>
            );
          })}
          <p className="detail__title">Ability</p>
          {pokemon.abilities.map((ability) => {
            return (
              <span
                className="detail__text"
                style={{
                  backgroundColor: pokemon.game_indices[0].version.name,
                }}
              >
                {ability.ability.name}
              </span>
            );
          })}
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
          />
        </div>
      </div>
      <div className="pokemonDetail__stats_wrapper">
        {pokemon.stats.map((item) => {
          return (
            <div className="pokemonDetail_stats">
              <div className="pokemonDetail__stat__box">
                {renderClass(item.base_stat)}
              </div>
              <p className="stat__text">{item.stat.name}</p>
              <p className="stat__text">{(item.base_stat * 100) / 250}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonDetail;
