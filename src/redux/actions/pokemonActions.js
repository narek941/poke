import {
  SET_POKEMONS,
  SET_TOTAL_COUNT,
  IS_LOADING,
} from "../reducers/pokemonReducer";
import axios from "axios";

export function setPokemons(limit = 25, offset = 0) {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING, payload: true });

      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const total = data.count;
      const pokemon = data.results.map(async (pokemon) => {
        const res = await axios.get(pokemon.url);
        console.log(res.data);
        const {
          height,
          id,
          name,
          sprites,
          stats,
          types,
          weight,
          abilities,
          species,
          game_indices,
        } = res.data;
        return {
          id,
          height,
          name,
          sprites,
          stats,
          types,
          weight,
          abilities,
          species,
          game_indices,
        };
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

export function setPokemonsByTypes(type = "", limit = 25, offset = 0) {
  return async (dispatch) => {
    console.log("i m here");
    try {
      dispatch({ type: IS_LOADING, payload: true });

      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/type/${type}/?limit=${limit}&offset=${offset}`
      );
      const total = data.pokemon.length;
      const pokemon = data.pokemon.map(async (pokemon) => {
        const res = await axios.get(pokemon.pokemon.url);
        const {
          id,
          height,
          name,
          sprites,
          stats,
          types,
          weight,
          abilities,
          species,
          game_indices,
        } = res.data;
        return {
          id,
          height,
          name,
          sprites,
          stats,
          types,
          weight,
          abilities,
          species,
          game_indices,
        };
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
export function setSearchResult(name) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1118`
      );
      const pokemon = data.results
        .filter((item) => item.name.includes(name))
        .map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          const {
            height,
            id,
            name,
            sprites,
            stats,
            types,
            weight,
            abilities,
            game_indices,
            species,
          } = res.data;
          return {
            id,
            height,
            name,
            sprites,
            stats,
            types,
            weight,
            abilities,
            species,
            game_indices,
          };
        });
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
    } finally {
      console.log("fin");
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
