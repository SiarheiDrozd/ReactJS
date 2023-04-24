import React from 'react';
import './movie-tile.scss';
import PropTypes from 'prop-types';
import ContextMenu from '../common/context-menu/context-menu';
import { Link } from 'react-router-dom';

const MovieTile = (props) => {
  const { poster_path, title, release_date, genres } = props.movie;

  return (
    <article className={'movie-tile'} onClick={() => props.onMovieTileClick(props.movie)}>
      <Link to={`/${props.movie.id}`} className={'movie-tile__link'}>
        <ContextMenu
          menu={props.contextMenu}
          onClick={(action) => props.onContextMenuClick(action, props.movie)}
        ></ContextMenu>
        <img
          src={'https://picsum.photos/200/300'}
          alt={poster_path}
          className={'movie-tile__image'}
        />
        <div className={'movie-tile__title-wrap'}>
          <h2 className={'movie-tile__title'}>{title}</h2>
          <span className={'movie-tile__year'}>
            {new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(new Date(release_date))}
          </span>
        </div>
        <p className={'movie-tile__genre-list'}>{genres?.join(', ')}</p>
      </Link>
    </article>
  );
};

MovieTile.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string)
  }),
  contextMenu: PropTypes.arrayOf(PropTypes.string),
  onContextMenuClick: PropTypes.func,
  onMovieTileClick: PropTypes.func
};

export default MovieTile;
