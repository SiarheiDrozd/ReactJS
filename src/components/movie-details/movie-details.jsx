import React from 'react';
import './movie-details.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieDetails = (props) => {
  const { poster_path, vote_average, title, overview, release_date, runtime, genres } = props.movie;
  return (
    <article className={'movie-details'}>
      <Link to={'/'} onClick={props.onClose} className={'movie-details__close-button'}></Link>
      <img
        src={'https://picsum.photos/200/300'}
        alt={poster_path}
        className={'movie-details__image'}
      />
      <div>
        <h2 className={'movie-details__title'}>
          {title}
          <span className={'movie-details__rate'}>{vote_average}</span>
        </h2>
        <p className={'movie-details__genre-list'}>{genres.join(', ')}</p>
        <p className={'movie-details__time'}>
          <span>
            {new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(new Date(release_date))}
          </span>
          <span>
            {Math.floor(runtime / 60)}h {runtime % 60}min
          </span>
        </p>
        <p className={'movie-details__description'}>{overview}</p>
      </div>
    </article>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string
  }),
  onClose: PropTypes.func
};

export default MovieDetails;
