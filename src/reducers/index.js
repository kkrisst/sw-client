import { combineReducers } from 'redux';
import apiRootsReducer from './apiRootsReducer.js';
import resourcesReducer from './resourcesReducer.js';

export default combineReducers({
	roots: apiRootsReducer,
	resources: resourcesReducer,
});
