// Create final store using all reducers and applying middleware
import { createBrowserHistory } from 'history';
// Redux utility functions
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

// Import all reducers
import reducers from '../reducer/index';

// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
export const history = createBrowserHistory();


const store = createStore(reducers, ['Use Redux'])
export default store;
