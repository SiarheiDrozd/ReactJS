import React from 'react';
import './movie-details.scss';
import PropTypes from 'prop-types';

const MovieDetails = (props) => {
  const { imgUrl, imgAlt, rate, title, description, year, duration, genreList } = props.movie;
  return (
    <article className={'movie-details'}>
      <img src={imgUrl} alt={imgAlt} className={'movie-details__image'} />
      <div>
        <h2 className={'movie-details__title'}>
          {title}
          <span className={'movie-details__rate'}>{rate}</span>
        </h2>
        <p className={'movie-details__genre-list'}>{genreList.join(', ')}</p>
        <p className={'movie-details__time'}>
          <span>{year}</span>
          <span>{duration}</span>
        </p>
        <p className={'movie-details__description'}>{description}</p>
      </div>
    </article>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    imgUrl: PropTypes.string,
    imgAlt: PropTypes.string,
    rate: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    genreList: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.string,
    description: PropTypes.string
  })
};

export default MovieDetails;
