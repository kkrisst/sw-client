import initialState from './initial-state';
import {
	FETCH_ROOT,
	FETCH_ROOT_FAILURE,
	FETCH_ROOT_SUCCESS
} from '../constants';

const resourcesReducer = (state = initialState.resources, action) => {
  switch (action.type) {
    case FETCH_ROOT:
      return { isLoading: true, ...state };

    case FETCH_ROOT_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      };
    
    case FETCH_ROOT_SUCCESS:
      // in case it is called with a next url
      const resourceId = action.rootId.split('/')[0];
      const nextPayload = { ...state.payload};

      if (nextPayload[resourceId]) {
        // already exists, adding to it
        const newResults = [ ...nextPayload[resourceId].results, ...action.payload.results ];
        nextPayload[resourceId] = action.payload;
        nextPayload[resourceId].results = newResults;
      } else {
        nextPayload[resourceId] = action.payload;
      }

      nextPayload[resourceId] = action.payload;

      return {
        isLoading: false,
        payload: nextPayload
      };
    
    default:
      return state;
  }
};

export default resourcesReducer;