import { combineReducers } from 'redux';
import apiRootsReducer from './apiRootsReducer.js';
import resourcesReducer from './resourcesReducer.js';
import specificReducer from './specificReducer';

export default combineReducers({
	roots: apiRootsReducer,
	resources: resourcesReducer,
	specific: specificReducer
});
