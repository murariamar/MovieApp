import React, { useEffect, useContext } from 'react';
import { MoviesContext } from './MovieContextProvider';
import { fetchMovies } from '../api';
import Movie from './Movie';

export default () => {
  const {
    isLoading,
    error,
    movies,
    setMovies,
    setError,
    setIsLoading
  } = useContext(MoviesContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchMovies();
        setMovies(movies);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="movies">
      {isLoading && !error ? (
        <span>loading...</span>
      ) : error ? (
        <div className="errorMessage">{error}</div>
      ) : (
        movies.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        ))
      )}
    </div>
  );
};
