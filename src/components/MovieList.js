import React from 'react';
import { useSelector } from 'react-redux';

const MovieList = () => {
  const { movies, loading, error } = useSelector((state) => state.movies);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movies.length) return <p>No movies found</p>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
            alt={movie.Title}
          />
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;