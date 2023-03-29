import './button.scss';

import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.style = this.props.isPrimary ? 'primary' : 'secondary';
  }

  render() {
    return (
      <button
        className={`button button__${this.style}`}
        type={this.props.type}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  isPrimary: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func,
  text: PropTypes.string
};

Button.defaultProps = {
  isPrimary: false,
  type: 'button',
  onClick: undefined,
  text: 'Button'
};
