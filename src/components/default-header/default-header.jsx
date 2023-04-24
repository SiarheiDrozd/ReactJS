import Dialog from '../dialog/dialog';
import FormMovie from '../forms/form-movie/form-movie';
import SearchForm from '../search-form/search-form';
import React from 'react';
import PropTypes from 'prop-types';

export const DefaultHeader = (props) => {
  return (
    <header className={'header'}>
      <button className={'add-movie-button'} onClick={() => props.onAddMovie}>
        +Add movie
      </button>

      <Dialog isVisible={props.isModalVisible} header={'add movie'} onClose={props.onModalClose}>
        <FormMovie></FormMovie>
      </Dialog>

      <div className={'container'}>
        <SearchForm onSearch={props.onSearch} initialQuery={props.initialQuery} />
      </div>
    </header>
  );
};

DefaultHeader.propTypes = {
  onAddMovie: PropTypes.func,
  onSearch: PropTypes.func,
  onModalClose: PropTypes.func,
  isModalVisible: PropTypes.bool,
  initialQuery: PropTypes.string
};
