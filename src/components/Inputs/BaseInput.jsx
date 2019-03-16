import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchIcon = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const BaseInput = ({ type, placeholder, value, onChange, name, isSearch, onClear, icons, min, max, precision }) => {
  const inputs = {
    simpleInput: {
      filterValue: value => value
    },
    integerInput: {
      filterValue: value => value >= min ? value < max ? value : Number.parseInt(max) : Number.parseInt(min)
    },
    floatInput: {
      filterValue: value => value >= min ? value < max ? value : max : min
    },
    searchInput: {
      filterValue: value => value
    },
  };
  return (
    <Container>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={inputs[name].filterValue(value)}
        onChange={onChange}
        name={name}
        min={min}
        max={max}
        style={{
          padding: '7px',
          border: '1px solid grey',
          borderRadius: '2px'
        }}
      />
      {
        isSearch ? 
        <SearchIcon onClick={e => e.preventDefault()}>
          <img src={icons.search.src} />
        </SearchIcon> : null
      }
      {
        !isSearch ? 
          <CloseIcon 
            onClick={onClear}
          >
            &times;
          </CloseIcon> : null
      }
    </Container>
  );
};

BaseInput.propTypes = {
  isSearch: PropTypes.bool,
};

BaseInput.defaultProps = {
  isSearch: false,
}