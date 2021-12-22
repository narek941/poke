import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Header, PokemonDetail } from "../../components";
import * as constants from "../../assets/constants";
import { setPokemonsById } from "../../redux/actions/pokemonActions";

import "./Pokemon.css";

const Pokemon = () => {
  const dispatch = useDispatch();
  const { poke } = useParams();

  const pokemon = useSelector((state) => state.pokemons.singlePokemon);

  useEffect(() => {
    dispatch(setPokemonsById(poke));
  }, []);

  const renderType = pokemon?.types?.map((type, index) => (
    <span key={index} className="detail__text">
      {type.type.name}
    </span>
  ));

  const renderAbility = pokemon.abilities?.map((ability, index) => (
    <span key={index} className="detail__text">
      {ability.ability.name}
    </span>
  ));

  const renderClass = (stat) => {
    const statsArr = [];
    const colorForStat = Math.ceil(10 - stat / 25);

    Array.from(Array(10).keys()).map((i) => {
      if (i >= colorForStat) {
        statsArr.push(constants.statsWithColorStyle);
      } else {
        statsArr.push(constants.statsWithoutColorStyle);
      }
    });

    return statsArr.map((classItem, index) => (
      <span key={index} className={classItem}></span>
    ));
  };

  const renderStats = pokemon.stats?.map((item, index) => (
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
