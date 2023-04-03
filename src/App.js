import './App.scss';

import Counter from './components/counter/counter';
import SearchForm from './components/search-form/search-form';
import GenreSelect from './components/genre-select/genre-select';
import MovieTile from './components/movie-tile/movie-tile';
function App() {
  const initialCounterValue = 1;
  const genreList = ['all', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const movieList = [
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Bohemian_Rhapsody_soundtrack.jpg',
      imgAlt: 'Bohemian Rhapsody',
      title: 'Bohemian Rhapsody',
      year: '2003',
      genreList: ['Drama', 'Biography', 'Music']
    }
  ];
  const contextMenu = ['edit', 'delete'];

  function onGenreSelect(genre) {
    console.log('app', genre);
  }

  function onSearch(searchQuery) {
    console.log('app', searchQuery);
  }

  function onContextMenuClick(action, movie) {
    console.log(action, movie);
  }

  return (
    <div>
      <header className={'header'}>
        <div className={'container'}>
          <SearchForm onSearch={onSearch} />
        </div>
      </header>
      <main className={'main'}>
        <div className={'container'}>
          <GenreSelect list={genreList} onSelect={onGenreSelect} default={genreList[2]} />
          <div className={'movies-list'}>
            {movieList.map((item) => (
              <MovieTile
                key={item.title}
                movie={item}
                contextMenu={contextMenu}
                onContextMenuClick={onContextMenuClick}
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
