import React from 'react';

const MoviesListEntry = ({movie, moviesDatabase, setMoviesDatabase}) => (
    <div className='movie-entry'>
      {movie.title}
      <button className={movie.watched ? 'watched-button selected' : 'watched-button'} onClick={(e) => {
        setMoviesDatabase(moviesDatabase.map(currentMovie => currentMovie.title === movie.title
          ? {title: movie.title, watched: !movie.watched}
          : currentMovie
          ));
      }}>{movie.watched ? 'Watched' : 'Watch'}</button>
    </div>
)

export default MoviesListEntry;