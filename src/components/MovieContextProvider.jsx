import React, { createContext, useState } from 'react';

export const MoviesContext = createContext(null);

export const MoviesContextProvider = props => {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const initialValue = {
    movies,
    setMovies,
    isLoading,
    setIsLoading,
    error,
    setError
  };

  return (
    <MoviesContext.Provider value={initialValue}>
      {props.children}
    </MoviesContext.Provider>
  );
};
