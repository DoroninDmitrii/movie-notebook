import React, { useContext } from 'react';
import { globalContext } from '../../context/globalContext';
import MovieCard from '../MovieCard/MovieCard';

const WatchList = () => {

  const { state, dispatch } = useContext(globalContext)

  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'> My Watchlist</h1>

          <span className="count-pill">
            {state.watchlist.length} {state.watchlist.length === 1 ? "Movie" : "Movies  "}
          </span>
        </div>

        {state.watchlist.length > 0 ? (
          <div className='movie-grid'>
            {state.watchlist.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} type="watchlist" />
            })}
          </div>
        ) : (
          <h2 className='no-movies'>No movies</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
