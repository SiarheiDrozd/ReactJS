import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="text"
        className={'input'}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {}
};
