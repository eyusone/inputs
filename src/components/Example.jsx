import React from 'react';
import { SimpleInput } from './Inputs/SimpleInput';
import { IntegerInput } from './Inputs/IntegerInput';
import { SearchInput } from './Inputs/SearchInput';
import { FloatInput } from './Inputs/FloatInput';

class Example extends React.Component {
  state = {
    inputValue: '',
    integerValue: '',
    floatValue: '',
    searchQuery: '',
  };

  onInputValueChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  onIntegerValueChange = e => {
    this.setState({ integerValue: e.target.value });
  }

  onFloatValueChange = e => {
    this.setState({ floatValue: e.target.value });
  }

  onSearch = e => {
    this.setState({ searchQuery: e.target.value });
  }

  clearInput = inputValue => e => {
    this.setState({ [inputValue]: '' })
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
          onChange={this.onIntegerValueChange}
          onClear={this.clearInput('integerValue')}
          name='integerInput'
          min={0}
          max={100.50}
        />
        <h2>Float input</h2>
        <FloatInput
          placeholder='00.00'
          value={this.state.floatValue}
          onChange={this.onFloatValueChange}
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