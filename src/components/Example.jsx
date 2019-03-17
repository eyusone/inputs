import React from 'react';
import { SimpleInput } from './Inputs/SimpleInput';
import { IntegerInput } from './Inputs/IntegerInput';
import { SearchInput } from './Inputs/SearchInput';
import { FloatInput } from './Inputs/FloatInput';
import { isNaN } from 'lodash';

class Example extends React.Component {
  state = {
    inputValue: '',
    integerValue: '',
    floatValue: '',
    searchQuery: '',
  };

  checkValues = (value, max, min) => {
    const intValue = Number.parseFloat(value);
    const intMax = Number.parseFloat(max);
    const intMin = Number.parseFloat(min);
    const valueArr = value.split('');
    return intValue >= intMin ? intValue < intMax ? valueArr.slice(0, valueArr.length).join('') : max : min
  };

  onInputValueChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  onNumberValueChange = value => e => {
    const checkedValue = this.checkValues(e.target.value, e.target.getAttribute('max'), e.target.getAttribute('min'));
    this.setState({ [value]: +checkedValue!==0 ? checkedValue : '' });
  }

  onSearch = e => {
    this.setState({ searchQuery: e.target.value });
  }

  clearInput = inputValue => e => {
    this.setState({ [inputValue]: this.state[inputValue] === '' ? 'error' : '' })
  };

  render() {
    return (
      <>
        <h2>Simple input</h2>
        <SimpleInput
          placeholder='simple input'
          value={this.state.inputValue}
          onChange={this.onInputValueChange}
          onClear={this.clearInput('inputValue')}
          name='simpleInput'
        />
        <h2>Integer input</h2>
        <IntegerInput
          placeholder='16'
          value={this.state.integerValue}
          onChange={this.onNumberValueChange('integerValue')}
          onClear={this.clearInput('integerValue')}
          name='integerInput'
          min={0}
          max={100.50}
        />
        <h2>Float input</h2>
        <FloatInput
          placeholder='00.00'
          value={this.state.floatValue}
          onChange={this.onNumberValueChange('floatValue')}
          onClear={this.clearInput('floatValue')}
          name='floatInput'
          precision={2}
          min={0}
          max={100.50}
        />
        <h2>Search input</h2>
        <SearchInput
          placeholder='search input'
          value={this.state.searchQuery}
          onChange={this.onSearch}
          name='searchInput'
          icons={this.props.icons}
        />
      </>
    )
  };
};

export default Example;