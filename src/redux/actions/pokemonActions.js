import {
  SET_POKEMONS,
  SET_TOTAL_COUNT,
  IS_LOADING,
} from "../reducers/pokemonReducer";
import axios from "axios";

export function setPokemons(limit = 20, offset = 0) {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING, payload: true });

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
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
}

export function setPokemonsByTypes(type = "normal", limit = 20, offset = 0) {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING, payload: true });

      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/type/${type}/?limit=${limit}&offset=${offset}`
      );
      const total = data.pokemon.length;
      const pokemon = data.pokemon.map(async (pokemon) => {
        const res = await axios.get(pokemon.pokemon.url);
        const { height, id, name, sprites, stats, types, weight } = res.data;
        return { id, height, name, sprites, stats, types, weight };
      });
      const parsedPokemonList = await Promise.all(pokemon);
      dispatch({ type: SET_POKEMONS, payload: parsedPokemonList });
      dispatch({ type: SET_TOTAL_COUNT, payload: total });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
}

export function setTotalCount(total) {
  return {
    type: SET_TOTAL_COUNT,
    payload: total,
  };
}
export function setSorted(pokemons) {
  return {
    type: SET_POKEMONS,
    payload: pokemons,
  };
}
export function setIsLoad(bool) {
  return {
    type: IS_LOADING,
    payload: bool,
  };
}
