import React from 'react';
import MoviesListEntry from './MoviesListEntry.jsx';

const MoviesList = ({moviesDatabase, setMoviesDatabase, movies}) => (
    <div className='moviesList'>
    {moviesDatabase.length === 0 ? 'Please add some movies!'
    : movies.length > 0 ? movies.map((movie, index) => <MoviesListEntry key={index} movie={movie} moviesDatabase={moviesDatabase} setMoviesDatabase={setMoviesDatabase}/>)
    : 'No movies here...'
    }
  </div>
)


export default MoviesList;