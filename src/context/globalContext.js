import React, { createContext, useReducer, useEffect } from "react";
// import { mainReducer } from "../reducer/mainReducer";

export const globalContext = createContext()

// const initialState = {
//   watchlist: [],
//   watched: [],
// }

// export const globalContext = createContext(initialState);

// export const GlobalProvider = props => {
//   const [state, dispatch] = useReducer(mainReducer, initialState)

//   const addMovieToWatchlist = (movie) => {
//     dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
//   }

//   return (
//     <globalContext.Provider value={{ watchlist: state.watchlist, watched: state.watched, addMovieToWatchlist }}>
//       {props.children}
//     </globalContext.Provider>
//   )
// }




