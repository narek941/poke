import React from "react";
import { NavLink } from "react-router-dom";

import "./Card.css";

const Card = ({ name, img, id, height, weight }) => {
  return (
    <NavLink to={"pokemon/" + id}>
      <div className="card__container">
        <div className="card">
          <p className="card__title">#{id}</p>

          <img className="card__container__image" src={img} alt="pokemon" />

          <div className="card__container__content">
            <h2> {name}</h2>
            <p className="card__info">
              h {height}, w {weight}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
