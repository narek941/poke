import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Bar from "../../components/Bar";
import List from "../../components/List";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import {
  setSorted,
  setPokemons,
  setPokemonsByTypes,
  setSearchResult,
} from "../../redux/actions/pokemonActions";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const isLoading = useSelector((state) => state.pokemons.isLoading);
  const totalCount = useSelector((state) => state.pokemons.totalCount);

  const [perPage, setPerPage] = useState(25);
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [groupofPages, setGroupofPages] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const searchClick = (e) => {
    e.preventDefault();
    if (e.target.searchText.value.trim().length > 1)
      dispatch(setSearchResult(e.target.searchText.value));
    setInputValue("");
  };
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

  const handlePageClick = (item) => {
    setCurrentPage(item);
  };

  useEffect(() => {
    dispatch(setPokemons(perPage, currentPage * perPage));
  }, [currentPage, perPage]);

  return (
    <>
      <Header />
      <Bar
        perPageHandler={perPageHandler}
        sortHandler={sortHandler}
        typeHandler={typeHandler}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        searchClick={searchClick}
      />
      <List pokemons={pokemons} isLoading={isLoading} />
      <Pagination
        pokemons={pokemons}
        totalCount={totalCount}
        perPage={perPage}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        groupofPages={groupofPages}
      />
    </>
  );
};

export default Home;
