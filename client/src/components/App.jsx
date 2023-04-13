import React from 'react';
import exampleMovies from '../data/exampleMoviesData.js';
import MoviesList from './MoviesList.jsx';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';
import WatchButtons from './WatchButtons.jsx';
const {useState, useEffect} = React;

const App = (props) => {
  const [moviesDatabase, setMoviesDatabase] = useState([]);
  const [movies, setMovies] = useState(moviesDatabase);
  const [searchText, setSearchText] = useState('');
  const [newMovie, setNewMovie] = useState('');
  let timeout = null;

  useEffect(() => {
    timeout = setTimeout(() => {
      if (searchText.length > 0) {
        setMovies(moviesDatabase.filter(
          movie => movie.title
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
          ));
      } else if (searchText.length === 0) {
        setMovies(moviesDatabase);
      }
    }, 300)

    return () => clearTimeout(timeout);
  }, [searchText]);

  useEffect(() => {
    console.log(moviesDatabase);
    setMovies(moviesDatabase);
  }, [moviesDatabase])

  return (
    <div>
      <header>Movie List</header>
      <div className='controls'>
        <AddMovies newMovie ={newMovie} setNewMovie={setNewMovie} moviesDatabase={moviesDatabase} setMoviesDatabase={setMoviesDatabase} setMovies={setMovies}/>
        <Search setSearchText={setSearchText}/>
        <WatchButtons setMovies={setMovies} moviesDatabase={moviesDatabase}/>
      </div>
      <MoviesList moviesDatabase={moviesDatabase} setMoviesDatabase={setMoviesDatabase} movies={movies}/>
    </div>
  );
}

export default App;