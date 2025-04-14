import React from 'react';
import SearchBox from './SearchBox';
import MovieList from './MovieList';

const App = () => {
  return (
    <div className="app">
      <h1>Movie Search (Redux)</h1>
      <SearchBox />
      <MovieList />
    </div>
  );
};

export default App;