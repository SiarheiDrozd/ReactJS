import React from 'react';
import './movie-tile.scss';
import PropTypes from 'prop-types';
import ContextMenu from '../common/context-menu/context-menu';

const MovieTile = (props) => {
  const { imgUrl, imgAlt, title, year, genreList } = props.movie;

  return (
    <article className={'movie-tile'}>
      <ContextMenu
        menu={props.contextMenu}
        onClick={(action) => props.onContextMenuClick(action, props.movie)}
      ></ContextMenu>
      <img src={imgUrl} alt={imgAlt} className={'movie-tile__image'} />
      <div className={'movie-tile__title-wrap'}>
        <h2 className={'movie-tile__title'}>{title}</h2>
        <span className={'movie-tile__year'}>{year}</span>
      </div>
      <p className={'movie-tile__genre-list'}>{genreList.join(', ')}</p>
    </article>
  );
};

MovieTile.propTypes = {
  movie: PropTypes.shape({
    imgUrl: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    genreList: PropTypes.arrayOf(PropTypes.string)
  }),
  contextMenu: PropTypes.arrayOf(PropTypes.string),
  onContextMenuClick: PropTypes.func
};

export default MovieTile;
