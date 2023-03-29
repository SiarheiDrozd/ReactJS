import React from 'react';
import './counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.value
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
      React.createElement('span', { className: 'number' }, this.state.counter),
      React.createElement('button', { id: 'inc', onClick: this.increment }, '+')
    );
  }
}

export default Counter;
