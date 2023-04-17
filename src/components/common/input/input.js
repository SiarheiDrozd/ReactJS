import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';
import uuid from 'react-uuid';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const inputId = uuid();

    const select = () => (
      <div className={'input__select-wrapper'}>
        <select
          id={inputId}
          className={'input__select'}
          onChange={this.props.onChange}
          defaultValue={this.props.placeholder}
        >
          <option defaultValue disabled>
            {this.props.placeholder}
          </option>
          {this.props.options.map((option) => (
            <option key={option} className={'input__item'} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );

    const input = () => (
      <input
        id={inputId}
        type="text"
        className={'input__input'}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );

    const date = () => {
      return <input className={'input__date'} type="date"></input>;
    };

    const textBox = () => {
      return <textarea className={'input__text-box'} />;
    };

    const getInput = () => {
      switch (this.props.type) {
        case 'text-box':
          return textBox();
        case 'select':
          return select();
        case 'date':
          return date();
        case 'input':
        default:
          return input();
      }
    };

    return (
      <div className={'input'}>
        {this.props.label && (
          <label className={'input__label'} htmlFor={inputId}>
            {this.props.label}
          </label>
        )}
        {getInput()}
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['input', 'text-box', 'select', 'select-check-box', 'date']),
  options: PropTypes.arrayOf(PropTypes.string),
  isMultiple: PropTypes.bool
};

Input.defaultProps = {
  type: 'input',
  value: '',
  placeholder: '',
  onChange: () => {},
  options: [],
  isMultiple: false
};
