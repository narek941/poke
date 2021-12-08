import React from "react";

import Card from "../Card";
import Pagination from "../Pagination";
import "./List.css";
import * as Api from "../../assets/api";

const List = ({pokemons}) => {

  return (
    <>
      <div className="container list__container">
        {pokemons.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              img={item.sprites.front_default}
              name={item.name}
              weight={item.weight}
              height={item.height}
            />
          );
        })} 
      </div>
    </>
  );
};

export default List;
