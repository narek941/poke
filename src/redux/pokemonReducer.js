const initialState = {
    pokemons: [],
    totalCount : 0,
}
export const SET_POKEMONS ='SET_POKEMONS';
export const SET_TOTAL_COUNT ='SET_TOTAL_COUNT';

export const pokemonReducer = (state=initialState,action)=>{
    
    switch (action.type) {
        case SET_POKEMONS:
            return {...state, pokemons: action.payload}

        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}

        default: return state
            
    }
    
  
}