import React, { lazy, Suspense, useEffect, useState } from 'react';
import MovieDetails from '../../components/movie-details/movie-details';
import Dialog from '../../components/dialog/dialog';
import FormMovie from '../../components/forms/form-movie/form-movie';
import GenreSelect from '../../components/genre-select/genre-select';
import SortControl from '../../components/sort-control/sort-control';
import DeleteMovie from '../../components/forms/delete-movie/delete-movie';
import MovieTile from '../../components/movie-tile/movie-tile';
import './movie-list-page.scss';
import {
  getMovies,
  searchMoviesByGenre,
  searchMoviesByTitle,
  sortMovies
} from '../../services/services';
import { useSearchParams, useLoaderData } from 'react-router-dom';
import { DefaultHeader } from '../../components/default-header/default-header';

const MovieContextEnum = {
  edit: 'edit',
  delete: 'delete'
};
const urlSearchParams = new URLSearchParams();

const MovieListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '');
  const [sortCriterion, setSortCriterion] = useState(searchParams.get('sortBy') || '');
  const [activeGenre, setActiveGenre] = useState(searchParams.get('genre') || '');
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(useLoaderData());
  const [modalAddMovie, setModalAddMovie] = useState(false);
  const [modalDeleteMovie, setModalDeleteMovie] = useState(false);
  const [modalEditMovie, setModalEditMovie] = useState(false);

  const sortBy = ['release date', 'title'];
  const genreList = ['all', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const contextMenu = Object.keys(MovieContextEnum);

  // onInit
  useEffect(() => {
    const fetchData = async () => {
      setMovieList(await getMovies());
    };
    lazy(fetchData());
  }, []);

  useEffect(() => {
    if (searchQuery) {
      onSearch(searchQuery);
    }
    if (sortCriterion) {
      onSortBy(sortCriterion);
    }
    if (activeGenre) {
      onGenreSelect(activeGenre);
    }
  }, []);

  const onSearch = async (query) => {
    if (query) {
      setSearchQuery(query);
      urlSearchParams.set('query', query);
      setSearchParams(urlSearchParams);

      setMovieList(await searchMoviesByTitle(query));
    } else {
      setMovieList(await getMovies(query));
    }
  };
  const onGenreSelect = async (genre) => {
    if (genre !== 'all') {
      setActiveGenre(genre);
      urlSearchParams.set('genre', genre);
      setSearchParams(urlSearchParams);

      setMovieList(await searchMoviesByGenre(genre));
    } else {
      setMovieList(await getMovies());
    }
  };
  const onSortBy = async (criteria) => {
    setSortCriterion(criteria);
    urlSearchParams.set('sortBy', criteria);
    setSearchParams(urlSearchParams);

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
          <DefaultHeader
            onAddMovie={() => setModalAddMovie(true)}
            isModalVisible={modalAddMovie}
            onModalClose={() => setModalAddMovie(false)}
            onSearch={onSearch}
            initialQuery={searchQuery}
          />
        )}
        <main className={'main'}>
          <div className={'container'}>
            <div className={'filter'}>
              <GenreSelect list={genreList} onSelect={onGenreSelect} default={activeGenre} />
              <SortControl
                options={sortBy}
                onChange={onSortBy}
                default={sortCriterion}
              ></SortControl>
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
