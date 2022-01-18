import React from "react";
import PropTypes from "prop-types";

import * as constants from "../../constants";

import "./Bar.css";

const Bar = ({
  sortHandler,
  perPageHandler,
  typeHandler,
  handleInputChange,
  inputValue,
  searchClick,
}) => {
  
  const mapOption = (arr)=>{
    const newMap= arr.map((type, index) => (
      <option key={index} value="{type}">
        {type}
      </option>
    ))
      return newMap
  }
  
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
          {mapOption(constants.typeArr)}
        </select>

        <select className="select__wrapper" onChange={sortHandler}>
          {mapOption(constants.filterArr)}
          </select>
        
      </div>
      <select className="select__wrapper" onChange={perPageHandler}>
        {mapOption(constants.perPageArr)}
      </select>
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
