import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';

export const rootReducer = combineReducers({
  router: connectRouter(history),
})