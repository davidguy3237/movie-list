import React from 'react';

const WatchButtons = ({setMovies, moviesDatabase}) => {

  let toggleClass = (button) => {

    let buttonList = {
      'watched': document.getElementById('watched'),
      'to-watch': document.getElementById('to-watch'),
      'view-all': document.getElementById('view-all')
    }

    for (const key in buttonList) {
      if (key === button) {
        buttonList[key].classList.add('selected');
      } else {
        buttonList[key].classList.remove('selected');
      }
    }
  }

  return (
    <div className='watch-buttons controller'>
      <button id='view-all' className='watch-button selected' onClick={(e) => {
        toggleClass('view-all');
        setMovies(moviesDatabase);
      }}>View All</button>

      <button id='watched' className='watch-button' onClick={(e) => {
        toggleClass('watched');
        setMovies(moviesDatabase.filter(movie => movie.watched))
      }}>Watched</button>

      <button id='to-watch' className='watch-button' onClick={(e) => {
        toggleClass('to-watch');
        setMovies(moviesDatabase.filter(movie => !movie.watched))
      }}>To Watch</button>
    </div>
  );
}

export default WatchButtons;