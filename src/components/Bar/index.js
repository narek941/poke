import React from "react";

import "./Bar.css";

const Bar = ({
  perPageHandler,
  sortHandler,
  typeHandler,
  handleInputChange,
}) => {
  return (
    <>
      <div className="container bar__container">
        <div className="filter__container">
          <input
            className="filter__input"
            maxLength="25"
            placeholder="Search by name"
          />
          <button className="filter__button">Search</button>
          <select className="select__wrapper" onChange={(e) => typeHandler(e)}>
            <option value="all">All Types</option>
            <option value="normal">normal</option>
            <option value="fighting">fighting</option>
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
          <select className="select__wrapper" onChange={(e) => sortHandler(e)}>
            <option value="0">Lowest to highest number</option>
            <option value="1">Highest to lowest number</option>
            <option value="2">A-Z</option>
            <option value="3">Z-A</option>
          </select>
        </div>
        <select className="select__wrapper" onChange={(e) => perPageHandler(e)}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </>
  );
};

export default Bar;
