import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import { MoviesContextProvider } from './components/MovieContextProvider';
import Movies from './components/Movies';

const App = () => {
  return (
    <div className="App">
      <MoviesContextProvider>
        <Header text="HOOKED" />
        <Search />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <Movies />
      </MoviesContextProvider>
    </div>
  );
};

export default App;
