import React, { lazy, Suspense, useEffect, useState } from 'react';
import MovieDetails from '../movie-details/movie-details';
import Dialog from '../dialog/dialog';
import FormMovie from '../forms/form-movie/form-movie';
import SearchForm from '../search-form/search-form';
import GenreSelect from '../genre-select/genre-select';
import SortControl from '../sort-control/sort-control';
import DeleteMovie from '../forms/delete-movie/delete-movie';
import MovieTile from '../movie-tile/movie-tile';
import './movie-list-page.scss';
import { getMovies, searchMovies, sortMovies } from '../../services/services';

const MovieContextEnum = {
  edit: 'edit',
  delete: 'delete'
};

const MovieListPage = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [sortCriterion, setSortCriterion] = useState('');
  const [activeGenre, setActiveGenre] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalAddMovie, setModalAddMovie] = useState(false);
  const [modalDeleteMovie, setModalDeleteMovie] = useState(false);
  const [modalEditMovie, setModalEditMovie] = useState(false);

  const sortBy = ['release date', 'title'];
  const genreList = ['all', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const contextMenu = Object.keys(MovieContextEnum);

  useEffect(() => {
    const fetchData = async () => {
      setMovieList(await getMovies());
    };
    lazy(fetchData());
  }, []);

  const onSearch = async (query) => {
    if (query) {
      setMovieList(await searchMovies(query));
    }
  };
  const onGenreSelect = (genre) => {
    setActiveGenre(genre);
  };
  const onSortBy = async (criteria) => {
    setMovieList(await sortMovies(criteria));
  };
  const onMovieDelete = () => {};
  function onContextMenuClick(action, movie) {
    setSelectedMovie(movie);
    switch (action) {
      case MovieContextEnum.delete:
        setModalDeleteMovie(true);
        break;
      case MovieContextEnum.edit:
        setModalEditMovie(true);
    }
  }
  function onMovieTileClick(movie) {
    setSelectedMovie(movie);
  }

  return (
    <Suspense fallback={<div>loading</div>}>
      <React.Fragment>
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)}></MovieDetails>
        ) : (
          <header className={'header'}>
            <button className={'add-movie-button'} onClick={() => setModalAddMovie(true)}>
              +Add movie
            </button>

            <Dialog
              isVisible={modalAddMovie}
              header={'add movie'}
              onClose={() => setModalAddMovie(false)}
            >
              <FormMovie></FormMovie>
            </Dialog>

            <div className={'container'}>
              <SearchForm onSearch={onSearch} />
            </div>
          </header>
        )}
        <main className={'main'}>
          <div className={'container'}>
            <div className={'filter'}>
              <GenreSelect list={genreList} onSelect={onGenreSelect} default={activeGenre} />
              <SortControl options={sortBy} onChange={onSortBy}></SortControl>
            </div>
            <p className={'filter-results'}>
              <b>{movieList?.length}</b> movies found
            </p>
            {movieList && (
              <div className={'movies-list'}>
                <Dialog
                  isVisible={modalDeleteMovie}
                  onClose={() => setModalDeleteMovie(false)}
                  header={'delete movie'}
                >
                  <DeleteMovie onDelete={onMovieDelete}></DeleteMovie>
                </Dialog>
                <Dialog
                  isVisible={modalEditMovie}
                  header={'edit movie'}
                  onClose={() => setModalEditMovie(false)}
                >
                  <FormMovie movie={selectedMovie}></FormMovie>
                </Dialog>
                {movieList.map((item) => (
                  <MovieTile
                    key={item?.title}
                    movie={item}
                    contextMenu={contextMenu}
                    onContextMenuClick={onContextMenuClick}
                    onMovieTileClick={onMovieTileClick}
                  ></MovieTile>
                ))}
              </div>
            )}
          </div>
        </main>
      </React.Fragment>
    </Suspense>
  );
};

export default MovieListPage;
