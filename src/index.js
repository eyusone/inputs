import React from 'react';
import ReactDOM from 'react-dom';
import App from './config/routes';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { rootReducer } from './reducers';

const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <App/>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();