import React from "react";

import "./Pagination.css";

const Pagination = ({
  pokemons,
  totalCount,
  perPage,
  currentPage,
  handlePageClick,
  numberofPages,
  getGroupofPage,
}) => {
  let arr =getGroupofPage();

  return (
    <div className="pagination__wrapper">
        <button
          onClick={() => handlePageClick(currentPage-1)}
          className={ "page"}
        >
          prev
        </button>
      {arr.map((item) => (
        <button
          key={item}
          onClick={() => handlePageClick(item)}
          className={currentPage != item ? "page" : "checked__page"}
        >
          {item}
        </button>
      ))}
         <button
        onClick={() => handlePageClick(currentPage+1)}
        className={ "page"}
      >
        next
      </button>
      
    </div>
  );
};

export default Pagination;
