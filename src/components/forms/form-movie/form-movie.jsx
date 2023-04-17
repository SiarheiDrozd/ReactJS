import React from 'react';
import Input from '../../common/input/input';
import './form-movie.scss';

import Button from '../../common/button/button';
import PropTypes from 'prop-types';
const FormMovie = (props) => {
  const { poster_path, vote_average, title, overview, release_date, runtime, genres } = props.movie;

  return (
    <form action="" className={'form-movie'}>
      <div className={'form-movie__row'}>
        <Input value={title} label={'title'} placeholder={'Movie'} />
        <Input
          value={release_date}
          label={'release date'}
          type={'date'}
          placeholder={'Select Date'}
        />
      </div>
      <div className={'form-movie__row'}>
        <Input value={poster_path} label={'movie url'} placeholder={'https://'} />
        <Input value={vote_average.toString()} label={'rating'} placeholder={'7.8'} />
      </div>
      <div className={'form-movie__row'}>
        <Input
          value={genres.join(', ')}
          label={'genre'}
          type={'select'}
          options={['genre', 'comedy', 'horror']}
          isMultiple={true}
          placeholder={'Select Genre'}
        />
        <Input value={runtime} label={'runtime'} placeholder={'minutes'} />
      </div>
      <div className={'form-movie__row'}>
        <Input value={overview} label={'Overview'} type={'text-box'} />
      </div>
      <div className={'form-movie__row-buttons'}>
        <Button text={'reset'} />
        <Button text={'submit'} isPrimary={true} />
      </div>
    </form>
  );
};

FormMovie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string
  })
};

export default FormMovie;
