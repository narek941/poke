import React from "react";
import ReactPaginate from "react-paginate";
import shortid from "shortid";

import "./Pagination.css";

const Pagination = ({ totalCount, perPage, currentPage, handlePageClick }) => {
  const render = (arr) => {
    const row = arr.map((item) => {
      return (
        <li
          key={shortid.generate()}
          className={currentPage != item ? `page` : `checked__page`}
        >
          <button onClick={handlePageClick}>{item}</button>
        </li>
      );
    });
    return row;
  };

  const arrPush = () => {
    const arr = [];
    const pageNum = Math.ceil(totalCount / perPage);
    var startPage, endPage;
    if (pageNum <= 10) {
      startPage = 1;
      endPage = pageNum;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= pageNum) {
        startPage = pageNum - 9;
        endPage = pageNum;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    let startIndex = (currentPage - 1) * perPage;
    let endIndex = Math.min(startIndex + perPage - 1, totalCount - 1);

    var shallowArr = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );
    return render(shallowArr);
  };

  return (
    <ul className="paginate">
      <li>
        <button>Prev</button>
      </li>
      {arrPush()}

      <li>
        <button>Next</button>
      </li>
    </ul>
  );
};

export default Pagination;
