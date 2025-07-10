'use client'
import { useAppSelector } from "@/store"
import { PokemonCard } from "./PokemonCard"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import { useEffect, useState } from "react"
import { IoHeartOutline } from "react-icons/io5"

export const PokemonFavouritesGrid = () => {
  const favouritePokemons: SimplePokemon[] = useAppSelector(state => Object.values(state.pokemons.favourites))
  
  return (
    <>
      {
        favouritePokemons.length
          ? (<div className="flex flex-wrap gap-10 items-center justify-center">
              {
                favouritePokemons.map(pokemon => (
                  <PokemonCard key={ pokemon.id } pokemon={pokemon} />            
                ))
              }
            </div>)
          : (<NoFavourites/>)
      }
    </>
  )
}

export const NoFavourites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span>No hay favoritos</span>
    </div>
  )
}