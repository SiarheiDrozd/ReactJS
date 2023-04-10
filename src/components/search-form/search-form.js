import React from 'react';
import Button from '../common/button/button';
import Input from '../common/input/input';
import PropTypes from 'prop-types';
import './search-form.scss';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: this.props.initialQuery
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchQuery: event.target.value });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.searchQuery);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} name={'searchForm'} className={'search-form'}>
        <Input
          label={'label'}
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
          placeholder={'What do you want to watch?'}
        />
        <Button
          className={'button button__primary'}
          text={'Search'}
          isPrimary={true}
          type={'submit'}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  initialQuery: PropTypes.string
};

SearchForm.defaultProps = {
  initialQuery: '',
  onSearch: () => {}
};
