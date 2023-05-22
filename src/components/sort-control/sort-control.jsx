import React from 'react';
import PropTypes from 'prop-types';
import './sort-control.scss';

function SortControl(props) {
  return (
    <label className={'sort-control'}>
      Sort by
      <select className={'sort-control__select'} onChange={props.onChange}>
        {props.options.map((option) => (
          <option key={option} className={'sort-control__item'} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

SortControl.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
};

export default SortControl;
