import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Card";
import Pagination from "../Pagination";
import "./List.css";
import * as Api from "../../assets/api";

const List = (props) => {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        return res.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((res) => axios.get(res.url)));
      })
      .then((results) => {
        setPokemon(results.map((res) => res.data));
      });
  }, []);
  console.log(pokemon);
  return (
    <>
      <div className="container list__container">
        {pokemon.map((item) => {
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
