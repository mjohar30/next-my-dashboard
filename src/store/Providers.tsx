'use client';

import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavouritesPokemons } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({children}: Props) => {

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourite-pokemons') ?? '{}')
    store.dispatch( setFavouritesPokemons(favourites))
  }, [])

  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}