import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/Header";

import "./Pokemon.css";
import PokemonDetail from "../../components/PokemonDetail";

const Pokemon = (props) => {
  const { poke } = useParams();
  const pokemon = useSelector((state) =>
    state.pokemons.pokemons.filter((item) => item.id == poke)
  );

  return (
    <>
      <Header />
      <PokemonDetail pokemon={pokemon[0]} />
    </>
  );
};

export default Pokemon;
