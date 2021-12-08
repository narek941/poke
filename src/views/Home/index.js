import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import Bar from "../../components/Bar";
import List from "../../components/List";
import Pagination from "../../components/Pagination";
import { setPokemons } from "../../redux/actions/pokemonActions";

import "./Home.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const typeHandler = (e) => {
    console.log(e.target.value);
  };
  const sortHandler = (e) => {
    console.log(e.target.value);
  };

  const perPageHandler = (e) => {
    setPerPage(e.target.value);
    setCurrentPage(0);
  };
  const handlePageClick = (e) => {
    setCurrentPage(e.selected * perPage);
  };

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const totalCount = useSelector((state) => state.pokemons.totalCount);

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
      <List pokemons={pokemons} />
      <Pagination
        totalCount={totalCount}
        perPage={perPage}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     pokemons: state.pokemons.pokemons,
//     totalCount: state.pokemons.totalCount,
//   };
// };
// const mapDispatchToProps = {
//   setPokemons,
// };

export default // connect(mapStateToProps, mapDispatchToProps)(
Home;
//   );
