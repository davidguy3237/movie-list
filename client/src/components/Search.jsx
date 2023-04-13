import React from 'react';

const Search = ({setSearchText}) => (
    <div className='search-bar'>
      <input type='text' id='search-bar' placeholder='Search...'
      onChange={(e) => setSearchText(e.target.value)}/>
      <button className='search-button' onClick={(e) => {
        let searchBar = document.getElementById('search-bar');
        setSearchText(searchBar.value);
      }}>Search</button>
    </div>
)

export default Search;