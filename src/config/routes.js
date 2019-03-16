import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

export default () => (
    <Switch>
      <Route exact path='/' component={() => {
        return (
          <div>
            simple
          </div>
        );
      }} />
    </Switch>
);