import React, { useContext, useEffect } from 'react';
import { globalContext } from '../../context/globalContext';

const ResultsCard = ({ el }) => {
  // console.log(el, '<--')
  const { state, dispatch } = useContext(globalContext)
  // console.log(state.watchlist, '<---')

  const addMovieToWatchlist = (el) => {
    // console.log(el, '<----')
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: el });
  }

  const addMovieToWatched = (el) => {
    // console.log(el, '<----')
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: el });
  }

 let storeMovie = state.watchlist.find(item => item.id === el.id);
 let storeMovieWatched = state.watched.find((item) => item.id === el.id);

 
 let watchlistDisabled = storeMovie ? true : storeMovieWatched ? true : false;

 let watchedDisabled = storeMovieWatched ? true : false;

 useEffect(() => {
   localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
   localStorage.setItem('watched', JSON.stringify(state.watched));
 }, [state])

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {el.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
            alt={`${el.title} Poster`}
          />
        ) : (
          <div className='filter-poster'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{el.title}</h3>
          <h4 className='release-data'>
            {el.release_date ? el.release_date.substring(0, 4) : '-'}</h4>
        </div>

        <div className='controls'>
          <button className='btn' disabled={watchlistDisabled} onClick={() => addMovieToWatchlist(el)}>Add to WatchList</button>
          <button className='btn' disabled={watchedDisabled} onClick={() => addMovieToWatched(el)}>Add to Watched</button>
        </div>


      </div>
    </div>
  );
};

export default ResultsCard;
