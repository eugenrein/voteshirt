import { combineReducers } from 'redux';
import designsBySearch from './designsBySearchReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  designsBySearch,
  routing: routerReducer
});

export default rootReducer;
