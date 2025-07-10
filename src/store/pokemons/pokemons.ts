import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons'

interface PokemonsState {
  favourites: {
    [key: string]: SimplePokemon
  }
}

// const getInitialState = (): PokemonsState => {
//   const favourites = JSON.parse(localStorage.getItem('favourite-pokemons') ?? '{}')
//   return favourites
// }

const initialState: PokemonsState = {
  favourites: {},
}

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavouritesPokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>){
      state.favourites = action.payload
    },
    toggleFavourite(state, action: PayloadAction<SimplePokemon>){
      const pokemon = action.payload;
      const { id } = pokemon;
      if(!!state.favourites[id]){
        delete state.favourites[id]
        // return;
      } else {
        state.favourites[id] = pokemon
      }

      localStorage.setItem('favourite-pokemons', JSON.stringify(state.favourites))
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleFavourite, setFavouritesPokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer