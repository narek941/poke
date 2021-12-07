import React from "react";

import "./Bar.css";

const Bar = (props) => {
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
          <div className="types__wrapper">
            <p>All Types</p>
          </div>
          <div className="sort__wrapper">
            <p>Lowest to highest number</p>
          </div>
        </div>
        <div className="perpages__wrapper">
          <p>Show per page:</p>
        </div>
      </div>
    </>
  );
};

export default Bar;
