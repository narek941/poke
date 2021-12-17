import React from "react";
import PropTypes from "prop-types";

import "./Bar.css";

const Bar = ({
  perPageHandler,
  sortHandler,
  typeHandler,
  handleInputChange,
  inputValue,
  searchClick,
  currentList,
}) => {
  return (
    <>
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
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="fairy">fairy</option>
          </select>

          {currentList && (
            <select
              className="select__wrapper"
              onChange={(e) => sortHandler(e)}
            >
              <option value="0">Lowest to highest number</option>
              <option value="1">Highest to lowest number</option>
              <option value="2">A-Z</option>
              <option value="3">Z-A</option>
            </select>
          )}
        </div>
        {currentList && (
          <select
            className="select__wrapper"
            onChange={(e) => perPageHandler(e)}
          >
            <option value="20">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        )}
      </div>
    </>
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
