import React from 'react';
import PropTypes from 'prop-types';
import { BaseInput } from './BaseInput'

export const SimpleInput = ({ placeholder, value, onChange, name, onClear }) => {
  return (
    <BaseInput 
      type={'text'}
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
      name={name}
      onClear={onClear}
    />
  )
};

SimpleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};