import React, { useState } from 'react';
import ResultsCard from '../ResultsCard/ResultsCard';

const Add = () => {

  const [queryStr, setQuery] = useState('');
  const [results, setResults] = useState([]);


  const onChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then(res => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([])
        }
      })
  }
  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input value={queryStr} onChange={onChange} text='text' placeholder='Search for a movie'></input>
          </div>
          {results?.length ? results.map(el => <ul key={el.id} className='results'>
            <ResultsCard el={el}/>
          </ul>) : <h1>Empty</h1>}
        </div>
      </div>
    </div>
  );
};

export default Add;
