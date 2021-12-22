import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Bar, List, Header, Pagination, FilteredList } from "../../components";
import {
  setSorted,
  setPokemons,
  setPokemonsByTypes,
  setSearchResult,
} from "../../redux/actions/pokemonActions";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const isLoading = useSelector((state) => state.pokemons.isLoading);
  const totalCount = useSelector((state) => state.pokemons.totalCount);

  const [perPage, setPerPage] = useState(25);
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState(true);

  const totalPages = Math.ceil(totalCount / perPage);
  const offset = (currentPage - 1) * perPage;
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const searchClick = (e) => {
    e.preventDefault();
    if (e.target.searchText.value.trim().length > 1)
      dispatch(setSearchResult(e.target.searchText.value));
    setInputValue("");
    setCurrentList(false);
  };

  const typeHandler = (e) => {
    setCurrentList(true);
    dispatch(setPokemonsByTypes(e.target.value, perPage, currentPage));
    setCurrentList(false);
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
  };

  const handlePageClick = (item) => {
    setCurrentPage(item);
    window.scrollTo(0, 0);
  };

  const getGroupofPage = () => {
    let maxPages = 10;
    let startPage = 1;
    let endPage = totalPages;
    if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );

    return pages;
  };

  useEffect(() => {
    dispatch(setPokemons(perPage, offset));
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
        currentList={currentList}
      />
      {currentList ? (
        <>
          <List pokemons={pokemons} isLoading={isLoading} />
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              handlePageClick={handlePageClick}
              getGroupofPage={getGroupofPage}
            />
          )}
        </>
      ) : (
        <FilteredList pokemons={pokemons} />
      )}
    </>
  );
};

export default Home;
