import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Header from "../../components/Header";
import Bar from "../../components/Bar";
import List from "../../components/List";
import Pagination from "../../components/Pagination";
import { setPokemons, setTotalCount } from "../../redux/pokemonActions";

import "./Home.css";

const Home = ({ pokemons, totalCount, setPokemons, setTotalCount }) => {
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setTotalCount(res.data.count);
        return res.data.results;
      })
      .then((results) => {
        console.log(results);
        return Promise.all(results.map((res) => axios.get(res.url)));
      })
      .then((results) => {
        setPokemons(results.map((res) => res.data));
      });
  }, []);

  console.log(pokemons);
  return (
    <>
      <Header />

      <Bar />
      <List pokemons={pokemons} />

      <Pagination totalCount={totalCount} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.pokemons,
    totalCount: state.pokemons.totalCount,
  };
};
const mapDispatchToProps = {
  setPokemons,
  setTotalCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
