import React from "react";

import "./Bar.css";

const Bar = ({ perPageHandler, sortHandler, typeHandler }) => {
  return (
    <>
      <div className="container bar__container">
        <div className="filter__container">
          <form>
            <input
              className="filter__input"
              maxLength="25"
              value=""
              placeholder="Search by name"
            />
            <button className="filter__button">Search</button>
          </form>
          <select className="select__wrapper" onChange={(e) => typeHandler(e)}>
            <option value="0">All Types</option>
            <option value="1">normal</option>
            <option value="2">fighting</option>
            <option value="3">flying</option>
            <option value="4">poison</option>
            <option value="5">ground</option>
            <option value="6">rock</option>
            <option value="7">bug</option>
            <option value="8">ghost</option>
            <option value="9">steel</option>
            <option value="10">fire</option>
            <option value="11">water</option>
            <option value="12">grass</option>
            <option value="13">electric</option>
            <option value="14">psychic</option>
            <option value="15">ice</option>
            <option value="16">dragon</option>
            <option value="17">dark</option>
            <option value="18">fairy</option>
            <option value="19">unknown</option>
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
