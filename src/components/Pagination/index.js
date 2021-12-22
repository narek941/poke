import React from "react";
import PropTypes from "prop-types";

import "./Pagination.css";

const Pagination = ({ currentPage, handlePageClick, getGroupofPage }) => {
  const groupArr = getGroupofPage();
  const prevStyle = `${currentPage === 1 ? "disable__button" : "page"}`;

  return (
    <div className="pagination__wrapper">
      <div className="pagination">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className={prevStyle}
        >
          prev
        </button>
        {groupArr.map((item) => (
          <button
            key={item}
            onClick={() => handlePageClick(item)}
            className={currentPage !== item ? "page" : "checked__page"}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className="page"
        >
          next
        </button>
      </div>
    </div>
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number,
  handlePageClick: PropTypes.func,
  getGroupofPage: PropTypes.func,
};

export default Pagination;
