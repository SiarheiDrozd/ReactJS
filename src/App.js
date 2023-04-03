import './App.scss';

import Counter from './components/counter/counter';
import SearchForm from './components/search-form/search-form';
import GenreSelect from './components/genre-select/genre-select';
import MovieTile from './components/movie-tile/movie-tile';
import { useState } from 'react';
import MovieDetails from './components/movie-details/movie-details';

function App() {
  const initialCounterValue = 1;
  const genreList = ['all', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const movieList = [
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Bohemian_Rhapsody_soundtrack.jpg',
      imgAlt: 'Bohemian Rhapsody',
      title: 'Bohemian Rhapsody',
      year: '2003',
      genreList: ['Drama', 'Biography', 'Music'],
      rate: '8.9',
      duration: '2h 34min',
      description:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    }
  ];
  const contextMenu = ['edit', 'delete'];
  const [movieDetails, setMovieDetails] = useState(undefined);

  function onGenreSelect(genre) {
    console.log('app', genre);
  }

  function onSearch(searchQuery) {
    console.log('app', searchQuery);
  }

  function onContextMenuClick(action, movie) {
    console.log(action, movie);
  }

  function onMovieTileClick(movie) {
    setMovieDetails(movie);
  }

  return (
    <div>
      {movieDetails ? (
        <MovieDetails movie={movieDetails}></MovieDetails>
      ) : (
        <header className={'header'}>
          <div className={'container'}>
            <SearchForm onSearch={onSearch} />
          </div>
        </header>
      )}
      <main className={'main'}>
        <div className={'container'}>
          <GenreSelect list={genreList} onSelect={onGenreSelect} default={genreList[2]} />
          <p className={'filter-results'}>
            <b>39</b> movies found
          </p>
          <div className={'movies-list'}>
            {movieList.map((item) => (
              <MovieTile
                key={item.title}
                movie={item}
                contextMenu={contextMenu}
                onContextMenuClick={onContextMenuClick}
                onMovieTileClick={onMovieTileClick}
              ></MovieTile>
            ))}
          </div>
          <Counter value={initialCounterValue} />
        </div>
      </main>
    </div>
  );
}

export default App;
