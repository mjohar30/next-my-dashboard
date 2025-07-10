import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import pokemonReducer from './pokemons/pokemons'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { localStorageMiddleware } from './middlewares/localstorage-middleware'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer,
  },
  // middleware: ( getDefaultMiddleware) => getDefaultMiddleware()
  //   .concat( localStorageMiddleware )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;