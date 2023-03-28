import './App.scss';

import Counter from './components/counter/counter';
import SearchForm from './components/search-form/search-form';
import GenreSelect from './components/genre-select/genre-select';

function App() {
  const initialCounterValue = 1;
  const genreList = ['all', 'Documentary', 'Comedy', 'Horror', 'Crime'];

  function onGenreSelect(genre) {
    console.log('app', genre);
  }

  function onSearch(searchQuery) {
    console.log('app', searchQuery);
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
          <br />
          <br />
          <br />
          <Counter value={initialCounterValue} />
        </div>
      </main>
    </div>
  );
}

export default App;
