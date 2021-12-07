import React from "react";

import "./Card.css";

const Card = ({ name, img, id, height, weight }) => {
  return (
    <>
      <div className="card__container">
        <div className="card">
          <p className="card__title">#{id}</p>
          <a className="card__container__image">
            <img src={img} alt="pokemon" />
          </a>
          <div className="card__container__content">
            <h2> {name}</h2>
            <p>
            h {height}, w {weight}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
