import React from 'react';
import { BaseInput } from './BaseInput';
import PropTypes from 'prop-types';

export const SearchInput = ({ placeholder, value, onChange, name, icons }) => {  
  return (
    <React.Fragment>
      <BaseInput
        type={'search'}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        name={name}
        isSearch={true}
        icons={icons}
      />
    </React.Fragment>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};