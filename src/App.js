import {movieData } from './data';
import React, { useState } from 'react';
import Filter from './Components/FilterRate/FilterRate.'
import MovieList from './Components/MovieList/MovieList.'
import AddMovie from './Components/AddMovie/AddMovie.'
import './App.css';
function App() {
  const [movies,setMovies] = useState(movieData);
  const [search,setSearch] = useState('');
  const [rate,setRate] = useState(0);
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }
  
  const searching = (s) => {
    setSearch(s)
  }
  const rating = (r) => {

    setRate(r)
  }
  return (
    <div>
            <h1 className='AppTitle'>Movie App</h1>
      <div className='nav'>
        <Filter searching={searching} rate={rating}/>
      </div>
      <div className='movie-list'> 
      <AddMovie handleAddMovie={handleAddMovie} />
      </div>
      <div>
      {movieData.length?
      <MovieList movieData={movies.filter((elm) => (elm.title.toLowerCase().match(search.toLowerCase().trim())) && (elm.rate >= rate))}/>
      :<h1>No Movies</h1>
}
      </div>
    
    </div>
  );
}

export default App;
