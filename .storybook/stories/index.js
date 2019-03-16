import React from 'react';
import { storiesOf } from '@storybook/react';
import Example from '../../src/components/Example';

import SearchImage from '../static/search.png';

const Search = {
  src: SearchImage
}

const Icons = {
  search: Search,
};

storiesOf('Input', module)
  .add('all inputs', () => (
    <Example icons={Icons}/>
  ));