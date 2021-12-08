import React from "react";
import ReactPaginate from 'react-paginate';

import "./Pagination.css";

const Pagination = ({totalCount,perPage,currentPage,handlePageClick}) => {

  console.log(totalCount)
  return (
    <>
      <ReactPaginate
        className="paginate"
        pageCount={Math.ceil(totalCount/perPage)}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed={2}
        previousLabel="< prev"
        pageClassName="page"
        activeClassName="checked__page"
        renderOnZeroPageCount={null}
      />

    </>
  );
};

export default Pagination;
