import React from 'react';

const AddMovies = ({newMovie, setNewMovie, moviesDatabase, setMoviesDatabase, setMovies}) => {

  return (
    <div className='add-movie controller'>
      <input type='text' id='add-movie' placeholder='Add a movie' onChange={(e) => {
        return setNewMovie(e.target.value);
      }}/>
      <button className='add-movie-button' onClick={() => {
        let textBox = document.getElementById('add-movie');
        let searchBar = document.getElementById('search-bar');
        if (textBox.value.length > 0) {
          setMoviesDatabase([...moviesDatabase, {title: newMovie, watched: false}]);
          setNewMovie('');
          textBox.value = '';
          searchBar.value = '';
        }
      }}>Add</button>
    </div>
  )
};

export default AddMovies;