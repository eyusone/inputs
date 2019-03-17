import React from 'react';
import { BaseInput } from './BaseInput';
import PropTypes from 'prop-types';
import { indexOf } from 'lodash';

export const IntegerInput = ({ placeholder, value, onChange, name, onClear, min, max }) => {
  const deleteDots = value => {
    const valueArray = value.split('');
    const indexOfDot = indexOf(valueArray, '.');
    const result = indexOfDot!==-1 ? valueArray.slice(0, indexOfDot).join('') : valueArray.join('')
    return result
  };

  const checkValue = value => {
    return !Number.isInteger(+value) ? parseFloat(deleteDots(value)) : +value === 0 ? value : +deleteDots(value)
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