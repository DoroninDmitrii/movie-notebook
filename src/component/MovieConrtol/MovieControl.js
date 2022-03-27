import React, { useContext } from 'react';
import { globalContext } from '../../context/globalContext'

const MovieControl = ({ movie, type }) => {

  const { state, dispatch } = useContext(globalContext)
  // console.log(state, '<--')

  const removeMovieFromWatchlist = (id) => {
    // console.log(id)
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id })
  }

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  }

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  }
  
  
  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  }

  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            <i className='fa-fw far fa-eye'></i>
          </button>

          <button className='ctrl-btn' onClick={() => removeMovieFromWatchlist(movie.id)}>
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button className='ctrl-btn' onClick={() => moveToWatchlist(movie)}>
            <i className='fa-fw far fa-eye-slash'></i>
          </button>
          <button className='ctrl-btn' onClick={() => removeFromWatched(movie.id)}>
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}

    </div>
  );
};

export default MovieControl;
