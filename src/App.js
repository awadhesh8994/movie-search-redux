import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './actions/movieActions';
import SearchBox from './components/SearchBox';
import MovieList from './components/MovieList';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.movies);

  // Initialize with popular movies
  useEffect(() => {
    dispatch(fetchMovies('Marvel'));
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Movie Explorer</h1>
          <p className="app-subtitle">Powered by React & Redux</p>
        </header>

        <main className="app-main">
          <SearchBox />
          
          {loading && (
            <div className="loading-indicator">
              <div className="spinner"></div>
              <p>Loading movies...</p>
            </div>
          )}

          {error && (
            <div className="error-alert">
              ⚠️ {error}
            </div>
          )}

          <MovieList />
        </main>

        <footer className="app-footer">
          <p>Search your favorite movies</p>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;