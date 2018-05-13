// Create final store using all reducers and applying middleware
import { createBrowserHistory } from 'history';
// Redux utility functions
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

// Import all reducers
import reducers from '../reducer/index';

export const history = createBrowserHistory();

const store = compose(
  applyMiddleware(routerMiddleware(history), thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(connectRouter(history)(reducers));

export default store;
