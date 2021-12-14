import React from "react";

import "./Pagination.css";

const Pagination = ({
  pokemons,
  totalCount,
  perPage,
  currentPage,
  handlePageClick,
  numberofPages,
  groupofPages,
}) => {
  return (
    <div className="pagination__wrapper">
      {groupofPages.map((item) => (
        <button
          key={item}
          onClick={() => handlePageClick(item)}
          className={currentPage != item ? "page" : "checked__page"}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
