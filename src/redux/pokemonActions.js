import { SET_POKEMONS } from "./pokemonReducer"
import { SET_TOTAL_COUNT } from "./pokemonReducer"

export function setPokemons(pokemons) {
    return {
        type: SET_POKEMONS,
        payload: pokemons
    }
}
export function setTotalCount(total) {
    return {
        type: SET_TOTAL_COUNT,
        payload: total
    }
}