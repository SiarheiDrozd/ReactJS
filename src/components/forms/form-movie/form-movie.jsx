import React from 'react';
import Input from '../../common/input/input';
import './form-movie.scss';

import Button from '../../common/button/button';
import PropTypes from 'prop-types';
const FormMovie = (props) => {
  const movie = { ...props.movie };
  console.log(movie);
  return (
    <form action="" className={'form-movie'}>
      <div className={'form-movie__row'}>
        <Input value={movie.title} label={'title'} placeholder={'Movie'} />
        <Input
          value={movie.date}
          label={'release date'}
          type={'date'}
          placeholder={'Select Date'}
        />
      </div>
      <div className={'form-movie__row'}>
        <Input value={movie.imgUrl} label={'movie url'} placeholder={'https://'} />
        <Input value={movie.rate} label={'rating'} placeholder={'7.8'} />
      </div>
      <div className={'form-movie__row'}>
        <Input
          value={movie.genreList}
          label={'genre'}
          type={'select'}
          options={['genre', 'comedy', 'horror']}
          isMultiple={true}
          placeholder={['Select Genre']}
        />
        <Input value={movie.duration} label={'runtime'} placeholder={'minutes'} />
      </div>
      <div className={'form-movie__row'}>
        <Input value={movie.description} label={'Overview'} type={'text-box'} />
      </div>
      <div className={'form-movie__row-buttons'}>
        <Button text={'reset'} />
        <Button text={'submit'} isPrimary={true} />
      </div>
    </form>
  );
};

FormMovie.propTypes = {
  movie: PropTypes.object
};

export default FormMovie;
