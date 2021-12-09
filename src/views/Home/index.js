import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Bar from "../../components/Bar";
import List from "../../components/List";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import {
  setSorted,
  setPokemons,
  setPokemonsByTypes,
} from "../../redux/actions/pokemonActions";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const totalCount = useSelector((state) => state.pokemons.totalCount);
  const isLoading = useSelector((state) => state.pokemons.isLoading);

  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const typeHandler = (e) => {
    dispatch(setPokemonsByTypes(e.target.value, perPage, currentPage));
  };

  const sortHandler = (e) => {
    switch (e.target.value) {
      case "0":
        const sortedLtoH = [...pokemons].sort((a, b) => a.id - b.id);
        dispatch(setSorted(sortedLtoH));
        break;
      case "1":
        const sortedHtoL = [...pokemons].sort((a, b) => b.id - a.id);
        dispatch(setSorted(sortedHtoL));
        break;
      case "2":
        const sortedAtoZ = [...pokemons].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        dispatch(setSorted(sortedAtoZ));
        break;
      case "3":
        const sortedZtoA = [...pokemons].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        dispatch(setSorted(sortedZtoA));
        break;
      default:
        break;
    }
  };

  const perPageHandler = (e) => {
    setPerPage(e.target.value);
    setCurrentPage(0);
  };
  const handlePageClick = (e) => {
    setCurrentPage(e.selected * perPage);
  };

  useEffect(() => {
    dispatch(setPokemons(perPage, currentPage));
  }, [currentPage, perPage]);

  return (
    <>
      <Header />
      <Bar
        perPageHandler={perPageHandler}
        sortHandler={sortHandler}
        typeHandler={typeHandler}
      />
      {isLoading ? <Loading /> : <List pokemons={pokemons} />}
      <Pagination
        totalCount={totalCount}
        perPage={perPage}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </>
  );
};

export default Home;
