import React from 'react';
import './counter.scss';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.value || 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return React.createElement(
      'div',
      { id: 'id', className: 'counter' },
      React.createElement('button', { id: 'dec', onClick: this.decrement }, '-'),
      React.createElement('span', { className: 'number', id: 'counter' }, this.state.counter),
      React.createElement('button', { id: 'inc', onClick: this.increment }, '+')
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number
};

export default Counter;
