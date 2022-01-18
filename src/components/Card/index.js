import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./Card.css";

const Card = ({ name, img, id }) => 
  <NavLink to={"pokemon/" + id}>
    <div className="card__container">
      <div className="card">
        <p className="card__title">#{id}</p>
        <div className="card__container__content">
          <h2 className="card__head__name"> {name}</h2>
        </div>
        <img className="card__container__image" src={img} alt="pokemon" />
      </div>
    </div>
  </NavLink>

Card.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
};
export default Card;
