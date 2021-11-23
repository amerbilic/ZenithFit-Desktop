import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({
  name, id, onChange, options, label, className,
}) => (
  <div className={className}>
    <label htmlFor={id}>{label}</label>
    <select name={name} id={id} onChange={(e) => { onChange(e.target.value); }}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  </div>
);

SelectInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

SelectInput.defaultProps = {
  name: '',
  id: '',
  label: '',
  className: '',
  options: [''],
  onChange: () => {},
};

export default SelectInput;