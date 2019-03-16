import React from 'react';
import PropTypes from 'prop-types';
import { BaseInput } from './BaseInput';
import { indexOf } from 'lodash';

export const FloatInput = ({ placeholder, value, onChange, name, onClear, min, max, precision }) => {
  const getPrecision = value => {
    const valueArray = value.split('');
    const indexOfDot = indexOf(valueArray, '.');
    const result = indexOfDot!==-1 ? valueArray.slice(0, indexOfDot + precision + 1).join('') : valueArray.join('')
    return result;
  }
  
  const checkValue = value => {
    return !Number.isInteger(+value) ? parseFloat(getPrecision(value)) : +value === 0 ? getPrecision(value) : +getPrecision(value)
  }

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

FloatInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onClear: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  precision: PropTypes.number,
};