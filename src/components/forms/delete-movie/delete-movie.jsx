import React from 'react';
import Button from '../../common/button/button';
import PropTypes from 'prop-types';
import './delete-movie.scss';

const DeleteMovie = (props) => {
  return (
    <p className={'delete-movie'}>
      <span className={'delete-movie__description'}>
        Are you sure you want to delete this movie?
      </span>
      <Button onClick={props.onDelete} isPrimary={true} text={'confirm'}></Button>
    </p>
  );
};

DeleteMovie.propTypes = {
  onDelete: PropTypes.func
};

export default DeleteMovie;
