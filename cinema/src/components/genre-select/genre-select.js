import React from 'react';
import PropTypes from 'prop-types';
import './genre-select.scss';

export default class GenreSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.default || this.props.list[0],
      list: this.props.list
    };

    this.select = this.select.bind(this);
  }

  select(item) {
    this.setState({
      selected: item
    });
    this.props.onSelect(item);
  }

  render() {
    return (
      <ul className={'genre-select-list'}>
        {this.props.list.map((item) => (
          <li
            className={`genre-select-list__item ${this.state.selected === item ? 'selected' : ''}`}
            key={item}
            onClick={() => this.select(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

GenreSelect.propTypes = {
  default: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func
};
GenreSelect.defaultProps = {
  list: [''],
  onSelect: () => {
    console.log('no handler provided');
  }
};
