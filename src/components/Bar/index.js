import React from "react";
import PropTypes from "prop-types";

import * as constants from "../../assets/constants";

import "./Bar.css";

const Bar = ({
  sortHandler,
  perPageHandler,
  typeHandler,
  handleInputChange,
  inputValue,
  searchClick,
  currentList,
}) => {
  return (
    <div className="container bar__container">
      <div className="filter__container">
        <form onSubmit={searchClick}>
          <input
            name="searchText"
            className="filter__input"
            maxLength="25"
            placeholder="Search by name"
            value={inputValue}
            onChange={handleInputChange}
          />

          <button type="submit" className="filter__button">
            Search
          </button>
        </form>

        <select
          name="types"
          id="types"
          className="select__wrapper"
          onChange={(e) => typeHandler(e)}
        >
          <option>Type</option>
          {constants.typeArr.map((type, index) => (
            <option key={index} value="{type}">
              {type}
            </option>
          ))}
        </select>

        {currentList && (
          <select className="select__wrapper" onChange={(e) => sortHandler(e)}>
            {constants.filterArr.map((filter, index) => (
              <option key={index} value={index}>
                {filter}
              </option>
            ))}
          </select>
        )}
      </div>
      {currentList && (
        <select className="select__wrapper" onChange={(e) => perPageHandler(e)}>
          {constants.perPageArr.map((perPage, index) => (
            <option key={index} value={perPage}>
              {perPage}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
Bar.propTypes = {
  perPageHandler: PropTypes.func,
  sortHandler: PropTypes.func,
  typeHandler: PropTypes.func,
  handleInputChange: PropTypes.func,
  inputValue: PropTypes.string,
  searchClick: PropTypes.func,
  currentList: PropTypes.bool,
};

export default Bar;
