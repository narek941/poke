import {
  SET_POKEMONS,
  SET_TOTAL_COUNT,
  IS_LOADING,
  SET_SINGLE_POKEMON,
} from "../reducers/pokemonReducer";
import axios from "axios";

export function setPokemons(limit = 25, offset = 0) {
  return async (dispatch) => {
    console.log("hiii");
    try {
      dispatch({ type: IS_LOADING, payload: true });
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const total = data.count;
      const pokemon = data.results.map((item) => ({
        name: item.name,
        url: item.url,
        id: item.url.split("/")[6],
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
          item.url.split("/")[6]
        }.png`,
      }));
      dispatch({ type: SET_POKEMONS, payload: pokemon });
      dispatch({ type: SET_TOTAL_COUNT, payload: total });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
}

export function setPokemonsById(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING, payload: true });
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

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
      console.log(error);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
}

export function setPokemonsByTypes(type = "normal") {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING, payload: true });
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/type/${type}/`
      );
      const total = data.pokemon.length;
      const pokemon = data.pokemon.map((item) => ({
        name: item.pokemon.name,
        url: item.pokemon.url,
        id: item.pokemon.url.split("/")[6],
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
          item.pokemon.url.split("/")[6]
        }.png`,
      }));
      console.log(pokemon);

      dispatch({ type: SET_POKEMONS, payload: pokemon });
      dispatch({ type: SET_TOTAL_COUNT, payload: total });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
}
export function setSearchResult(name) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1118`
      );
      const pokemon = data.results
        .filter((item) => item.name.includes(name))
        .map(async (item) => ({
          name: item.name,
          url: item.url,
          id: item.url.split("/")[6],
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
            item.url.split("/")[6]
          }.png`,
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
      console.log(error);
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
