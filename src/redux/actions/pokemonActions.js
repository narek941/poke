import { SET_POKEMONS } from "../reducers/pokemonReducer";
import { SET_TOTAL_COUNT } from "../reducers/pokemonReducer";
import axios from "axios";

export function setPokemons(limit = 20, offset = 0) {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const total = data.count;
    const pokemon = data.results.map(async (pokemon) => {
      const res = await axios.get(pokemon.url);
      const { height, id, name, sprites, stats, types, weight } = res.data;
      return { id, height, name, sprites, stats, types, weight };
    });
    const parsedPokemonList = await Promise.all(pokemon);

    dispatch({ type: SET_POKEMONS, payload: parsedPokemonList });
    dispatch({ type: SET_TOTAL_COUNT, payload: total });
  };
}
export function setTotalCount(total) {
  return {
    type: SET_TOTAL_COUNT,
    payload: total,
  };
}
