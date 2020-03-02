import React, { useState, useContext } from 'react';
import { MoviesContext } from './MovieContextProvider';
import { fetchMovies } from '../api';

const Search = () => {
  const { setMovies, setError, setIsLoading } = useContext(MoviesContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChanges = e => {
    setSearchTerm(e.target.value);
  };

  const resetInputField = () => {
    setSearchTerm('');
  };

  const search = async searchTerm => {
    try {
      const movies = await fetchMovies(searchTerm);
      setMovies(movies);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const handleSearch = e => {
    e.preventDefault();
    setIsLoading(true);
    search(searchTerm);
  };

  return (
    <form className="search">
      <input onChange={handleSearchInputChanges} type="text" />
      <input onClick={handleSearch} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
