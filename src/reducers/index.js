import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';
import twitter from '../domains/twitter/twitterReducer';
import googlePlace from '../domains/googlePlace/reducer';

const rootReducer = combineReducers({
  router: router5Reducer,
  twitter,
  googlePlace
});

export default rootReducer;
