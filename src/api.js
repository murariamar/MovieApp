const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=6a00b922';

const getApiUrl = searchTerm =>
  searchTerm
    ? `https://www.omdbapi.com/?s=${searchTerm}&apikey=6a00b922`
    : MOVIE_API_URL;

export const fetchMovies = async (searchTerm = '') => {
  const url = getApiUrl(searchTerm);

  return await fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.Response === 'True') {
        return data.Search;
      } else {
        throw data.Error;
      }
    })
    .catch(err => {
      throw err;
    });
};
