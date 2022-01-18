import axios from "axios";

import * as constants from "../../constants";

import {
  SET_POKEMONS,
  SET_TOTAL_COUNT,
  IS_LOADING,
  SET_SINGLE_POKEMON,
} from "../reducers/pokemonReducer";

export const setPokemons=(limit = 25, offset = 0) =>{
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING, payload: true });
      const { data } = await axios.get(
        `${constants.baseUrl}pokemon/?limit=${limit}&offset=${offset}`
      );
      const total = data.count;
      const pokemon = data.results.map((item) => ({
        name: item.name,
        url: item.url,
        id: item.url.split("/")[6],
        img: `${constants.imgUrl}${item.url.split("/")[6]}.png`,
      }));
      dispatch({ type: SET_POKEMONS, payload: pokemon });
      dispatch({ type: SET_TOTAL_COUNT, payload: total });
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
}

export const setPokemonsById=(id) =>{
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING, payload: true });
      const { data } = await axios.get(`${constants.baseUrl}pokemon/${id}`);

      dispatch({
        type: SET_SINGLE_POKEMON,
        payload: {
          height: data.height,
          id: data.id,
          name: data.name,
          sprites: data.sprites,
          stats: data.stats,
          types: data.types,
          weight: data.weight,
          abilities: data.abilities,
          game_indices: data.game_indices,
        },
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
}

export const setPokemonsByTypes=(type = "normal")=> {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING, payload: true });
      const { data } = await axios.get(`${constants.baseUrl}/type/${type}/`);
      const total = data.pokemon.length;
      const pokemon = data.pokemon.map((item) => ({
        name: item.pokemon.name,
        url: item.pokemon.url,
        id: item.pokemon.url.split("/")[6],
        img: `${constants.imgUrl}${item.pokemon.url.split("/")[6]}.png`,
      }));

      dispatch({ type: SET_POKEMONS, payload: pokemon });
      dispatch({ type: SET_TOTAL_COUNT, payload: total });
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
}
export const setSearchResult=(name) =>{
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${constants.baseUrl}pokemon?limit=1118`
      );
      const pokemon = data.results
        .filter((item) => item.name.includes(name))
        .map(async (item) => ({
          name: item.name,
          url: item.url,
          id: item.url.split("/")[6],
          img: `${constants.imgUrl}${item.url.split("/")[6]}.png`,
        }));
      const total = pokemon.length;
      const parsedPokemonList = await Promise.all(pokemon);
      const fileteredPokemons = parsedPokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      );
      dispatch({
        type: SET_POKEMONS,
        payload: fileteredPokemons,
      });
      dispatch({ type: SET_TOTAL_COUNT, payload: total });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const setTotalCount=(total)=> {
  return {
    type: SET_TOTAL_COUNT,
    payload: total,
  };
}
export const setSorted=(pokemons)=> {
  return {
    type: SET_POKEMONS,
    payload: pokemons,
  };
}
export const setIsLoad=(bool)=> {
  return {
    type: IS_LOADING,
    payload: bool,
  };
}
