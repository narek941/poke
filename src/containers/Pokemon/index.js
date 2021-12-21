import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import PokemonDetail from "../../components/PokemonDetail";

import "./Pokemon.css";

const Pokemon = () => {
  const { poke } = useParams();

  const pokemon = useSelector(
    (state) =>
      state.pokemons.pokemons.filter(
        (item) => Number(item.id) === Number(poke)
      )[0]
  );
  const renderType = pokemon?.types?.map((type, index) => (
    <span
      key={index}
      className="detail__text"
      style={{
        backgroundColor: pokemon.game_indices[1].version.name,
      }}
    >
      {type.type.name}
    </span>
  ));

  const renderAbility = pokemon.abilities.map((ability, index) => (
    <span
      key={index}
      className="detail__text"
      style={{
        backgroundColor: pokemon.game_indices[0].version.name,
      }}
    >
      {ability.ability.name}
    </span>
  ));

  const renderClass = (stat) => {
    const arr = [];
    const colorForStat = Math.ceil(10 - stat / 25);
    Array.from(Array(10).keys()).map((i) => {
      if (i >= colorForStat) {
        arr.push("pokemonsDetail__stat__box__inner color_for_stat");
      } else {
        arr.push("pokemonsDetail__stat__box__inner");
      }
    });
    return arr.map((classItem, index) => (
      <span key={index} className={classItem}></span>
    ));
  };

  const renderStats = pokemon.stats.map((item, index) => (
    <div key={index} className="pokemonDetail_stats">
      <div className="pokemonDetail__stat__box">
        {renderClass(item.base_stat)}
      </div>
      <p className="stat__text">{item.stat.name}</p>
      <p className="stat__text">{(item.base_stat * 100) / 250}%</p>
    </div>
  ));

  return (
    <>
      <Header />
      <PokemonDetail
        pokemon={pokemon}
        renderStats={renderStats}
        renderType={renderType}
        renderAbility={renderAbility}
      />
    </>
  );
};

export default Pokemon;
