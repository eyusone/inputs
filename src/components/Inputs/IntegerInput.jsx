import React from 'react';
import { BaseInput } from './BaseInput';
import PropTypes from 'prop-types';

export const IntegerInput = ({ placeholder, value, onChange, name, onClear, min, max }) => {
  const checkValue = value => {
    return !Number.isInteger(+value) ? Number.parseInt(value) : +value === 0 ? value : +value
  };

  return (
    <React.Fragment>
      <BaseInput
        value={checkValue(value)}
        onChange={onChange}
        type={'number'}
        placeholder={placeholder}
        name={name}
        onClear={onClear}
        min={min}
        max={max}
      />
    </React.Fragment>
  );
};

IntegerInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onClear: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};